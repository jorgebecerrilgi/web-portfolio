import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { WHITE } from "~/constants";
import { getColorFromRoutename, getRoutenameFromPathname } from "~/helpers";
import { useScroll, useTimeoutEffect, useWindowSize } from "~/hooks";
import { getScrollPercentage, renderLines, renderSectionNames, renderStations } from "./helpers";

const Layout = () => {
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const [goBack, setGoBack] = useState(false);
    const scrollY = useScroll();
    const windowSize = useWindowSize();
    const location = useLocation();
    const navigate = useNavigate();
    const routename = getRoutenameFromPathname(location.pathname);
    // The opacity value for the background's primary color, at the current scroll position.
    const bgOpacity = goBack ? 0 : windowSize ? 1 - (scrollY / windowSize.vh - 0.25) * 4 : 1;
    // The percentage of the progress depending on the current scroll.
    const progressPercentage = getScrollPercentage(sections);
    // The primary color of the current route.
    const routeColor = getColorFromRoutename(routename);
    // The color of the UI, at the current scroll position.
    const uiColor = bgOpacity > 0.2 ? WHITE.hex : routeColor.hex;
    // A css style object containing the current primary color.
    const UIStyle: React.CSSProperties = { backgroundColor: uiColor, color: uiColor, borderColor: uiColor }

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
            {/* Back to Homepage */}
            <nav
                className={`
                    fixed right-0
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
                    <div className="w-[16px] h-[2px] translate-y-[8.5px] rotate-45 duration-200" style={UIStyle}></div>
                    <div className="w-[2px] h-[16px] translate-x-[7px] rotate-45 duration-200" style={UIStyle}></div>
                </button>
            </nav>
            {/* In this page */}
            <div
                className={`
                    fixed h-full
                    w-[144px]
                    content-center
                    motion-duration-1000
                    ${
                        goBack
                            ? "motion-opacity-out-0 motion-delay-200 motion-blur-out-sm -motion-translate-x-out-[5%]"
                            : "motion-opacity-in-0 motion-delay-500 motion-blur-in-sm -motion-translate-x-in-[5%]"
                    }
                `}
            >
                <div className="w-full max-h-[400px] flex justify-center items-end">
                    {/* Line */}
                    <div className={`
                        w-[16px] h-[400px] py-[16px]
                        flex flex-col gap-[16px] align-items-center items-center
                        translate-x-full self-center
                    `}>{renderLines(sections, UIStyle)}</div>
                    {/* Section Names */}
                    <nav
                        className="w-0 text-xxs duration-200" style={UIStyle} aria-label="On this page">
                        <ol className="h-[400px] text-nowrap flex flex-col justify-between translate-x-[32px]">
                            {renderSectionNames(sections)}
                        </ol>
                    </nav>
                    {/* Stations */}
                    <div className="w-[16px] h-[400px] flex flex-col justify-between z-0">
                        {renderStations(sections, UIStyle)}
                    </div>
                    {/* Wagon */}
                    <div
                        className="w-[16px] h-[384px] -translate-x-full duration-500 ease-in-out"
                        style={{ translate: `0 ${progressPercentage * 100}%` }}
                    >
                        <div className="h-[32px] -translate-y-[24px] duration-200" style={UIStyle}></div>
                    </div>
                </div>
            </div>
            {/* Content */}
            <main className={`mx-[176px] text-sm ${goBack ? "motion-opacity-out-0 motion-duration-200" : ""}`}>
                <div className="max-w-[960px] m-auto justify-items-center">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default Layout;