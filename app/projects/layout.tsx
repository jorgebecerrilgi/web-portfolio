import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { BLACK, WHITE } from "~/constants";
import { getColorFromRoutename, getRoutenameFromPathname } from "~/helpers";
import { useMediaQuery, useScroll, useTimeoutEffect, useWindowSize } from "~/hooks";
import { getScrollPercentage, renderLines, renderSectionNames, renderStations } from "./helpers";

const Layout = () => {
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [goBack, setGoBack] = useState(false);
    const scrollY = useScroll();
    const windowSize = useWindowSize();
    const location = useLocation();
    const navigate = useNavigate();
    const routename = getRoutenameFromPathname(location.pathname);
    const isTabletOrMobile = useMediaQuery("(max-width: 1024px)");
    // The opacity value for the background's primary color, at the current scroll position.
    const bgOpacity = goBack ? 0 : windowSize ? 1 - (scrollY / windowSize.vh - 0.25) * 4 : 1;
    // The percentage of the progress depending on the current scroll.
    const progressPercentage = getScrollPercentage(sections);
    // The primary color of the current route.
    const routeColor = getColorFromRoutename(routename);
    // Whether the UI should be white.
    const isUIWhite = bgOpacity > 0.2;

    const handleOnClickBack = useCallback(() => setGoBack(true), []);

    const msToGoBack = goBack ? 1000 : undefined;
    useTimeoutEffect(() => navigate("/"), msToGoBack);

    // Stores all section elements in the document.
    useEffect(() => {
        const collection = window.document.getElementsByTagName("section");
        setSections(Array.from(collection));
    }, []);
    
    return (
        <div
            className="w-full duration-200"
            style={{ backgroundColor: `rgb(${routeColor.r} ${routeColor.g} ${routeColor.b} / ${bgOpacity})` }}
        >
            {/* Content */}
            <main className={`lg:mx-[176px] text-sm ${goBack ? "motion-opacity-out-0 motion-duration-200" : ""}`}>
                <div className="max-w-[960px] m-auto justify-items-center">
                    <Outlet/>
                </div>
            </main>
            {/* Back to Homepage */}
            <nav
                className={`
                    fixed top-0 right-0
                    p-[64px]
                    text-end text-white
                    motion-duration-1000
                    ${
                        goBack
                            ? "motion-opacity-out-0 motion-delay-200 motion-blur-out-sm motion-translate-x-out-[5%]"
                            : "motion-opacity-in-0 motion-delay-500 motion-blur-in-sm motion-translate-x-in-[5%]"
                    }
                `}
                aria-label="Main"
            >
                <button aria-label="Back to homepage" onClick={handleOnClickBack}>
                    <div 
                        className="w-[16px] h-[2px] translate-y-[8.5px] rotate-45 duration-200"
                        style={{ backgroundColor: isUIWhite ? WHITE.hex : BLACK.hex }}
                    ></div>
                    <div 
                        className="w-[2px] h-[16px] translate-x-[7px] rotate-45 duration-200"
                        style={{ backgroundColor: isUIWhite ? WHITE.hex : BLACK.hex }}
                    ></div>
                </button>
            </nav>
            {/* In this page */}
            <div
                className={`
                    fixed bottom-0
                    h-[144px] w-full px-10
                    lg:w-[144px] lg:h-full lg:py-10
                    translate-y-[1px]
                    content-center justify-items-center
                    motion-duration-1000
                    ${
                        goBack
                            ? "motion-opacity-out-0 motion-delay-200 motion-blur-out-sm -motion-translate-x-out-[5%]"
                            : "motion-opacity-in-0 motion-delay-500 motion-blur-in-sm -motion-translate-x-in-[5%]"
                    }
                `}
                style={{
                    backgroundImage: isTabletOrMobile
                        ? `linear-gradient(to top, ${isUIWhite ? "rgb(255 255 255 / 0)" : "#fff"}, rgb(255 255 255 / 0))`
                        : undefined
                }}
            >
                <div className={`
                    w-full h-full
                    flex justify-center items-end
                    max-w-[640px] flex-col
                    lg:max-w-full lg:max-h-[400px] lg:flex-row
                `}>
                    {/* Line */}
                    <div className={`
                        h-[16px] w-full px-[16px] translate-y-full
                        lg:w-[16px] lg:h-full lg:px-0 lg:py-[16px] lg:flex-col lg:translate-x-full lg:translate-y-0
                        flex gap-[16px] align-items-center items-center
                        self-center
                    `}>{renderLines(sections, isUIWhite ? WHITE.hex : routeColor.hex)}</div>
                    {/* Section Names */}
                    <nav
                        className={`
                            w-full h-0 text-xxxs
                            lg:w-0 lg:h-full sm:text-xxs
                            duration-200
                        `}
                        style={{ color: isUIWhite ? WHITE.hex : BLACK.hex }}
                        aria-label="On this page"
                    >
                        <ol className={`
                            w-full translate-y-[32px]
                            lg:h-full lg:flex-col lg:translate-x-[32px] lg:translate-y-0
                            text-nowrap flex justify-between
                        `}>
                            {renderSectionNames(sections)}
                        </ol>
                    </nav>
                    {/* Stations */}
                    <div className={`
                        h-[16px] w-full
                        lg:w-[16px] lg:h-full lg:flex-col
                        flex justify-between
                        z-0
                    `}>
                        {renderStations(sections, isUIWhite ? WHITE.hex : routeColor.hex)}
                    </div>
                    {/* Wagon */}
                    <div
                        className={`
                            w-[calc(100%-16px)] h-[16px] -translate-y-full
                            lg:w-[16px] lg:h-[calc(100%-16px)] lg:-translate-x-full lg:translate-y-0
                            duration-500 ease-in-out
                        `}
                        style={{ translate: `${isTabletOrMobile ? "" : "0 "} ${progressPercentage * 100}%` }}
                    >
                        <div
                            className={`
                                w-[32px] h-full -translate-x-[24px]
                                lg:w-full lg:h-[32px] lg:-translate-y-[24px] lg:translate-x-0
                                duration-200
                            `}
                            style={{ backgroundColor: isUIWhite ? WHITE.hex : routeColor.hex }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
