import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { WHITE } from "~/constants";
import { getColorFromRoutename, getRoutenameFromPathname } from "~/helpers";
import { useScroll, useWindowSize } from "~/hooks";

const getScrollPercentage = (sections: HTMLElement[]): number => {
    const len = sections.length;
    const percentageBetweenSections = 1 / (len - 1);
    for (let i = 0; i < len; i++) {
        const { bottom, height } = sections[i].getBoundingClientRect();
        if (bottom > height / 2) return i * percentageBetweenSections;
    }
    return 0;
};

const renderLines = (sections: HTMLElement[], styleProp: React.CSSProperties) => {
    return sections.slice(1).map(() => {
        const total = sections.length;
        const height = (400 - (16 * total)) / (total - 1);
        return <div className="w-[2px] duration-200" style={{ ...styleProp, height: height }}></div>;
    });
};

const renderSectionNames = (sections: HTMLElement[]) => {
    return sections.map((section) => {
        const { id } = section;
        const name = id.split("-").join(" ").toUpperCase();
        
        return (
            <li className="-rotate-[0.25rad]" key={id}>
                <a href={`#${id}`} aria-label={`Go to ${name}`}>{name}</a>
            </li>
        );
    });
};

const renderStations = (sections: HTMLElement[], styleProp: React.CSSProperties) => {
    return sections.map(({ id }) => (
        <div
            className="w-[16px] h-[16px] rounded-full border-4 border-solid duration-200"
            style={{ ...styleProp, backgroundColor: "" }}
            key={id}
        ></div>
    ));
};

const Layout = () => {
    const [sections, setSections] = useState<HTMLElement[]>([]);
    const scrollY = useScroll();
    const windowSize = useWindowSize();
    const location = useLocation();
    const routename = getRoutenameFromPathname(location.pathname);
    // The opacity value for the background's primary color, at the current scroll position.
    const bgOpacity = windowSize ? 1 - (scrollY / windowSize.vh - 0.25) * 4 : 1;
    // The percentage of the progress depending on the current scroll.
    const progressPercentage = getScrollPercentage(sections);
    // The primary color of the current route.
    const routeColor = getColorFromRoutename(routename);
    // The color of the UI, at the current scroll position.
    const uiColor = bgOpacity > 0.2 ? WHITE.hex : routeColor.hex;
    // A css style object containing the current primary color.
    const UIStyle: React.CSSProperties = { backgroundColor: uiColor, color: uiColor, borderColor: uiColor }

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
            <nav className="fixed right-0 p-[64px] text-end text-white motion-opacity-in-0 motion-delay-500 motion-blur-in-sm motion-duration-1000 motion-translate-x-in-[5%]" aria-label="Main">
                <a href="/" aria-label="Back to homepage">
                    <div className="w-[16px] h-[2px] translate-y-[8.5px] rotate-45 duration-200" style={UIStyle}></div>
                    <div className="w-[2px] h-[16px] translate-x-[7px] rotate-45 duration-200" style={UIStyle}></div>
                </a>
            </nav>
            {/* In this page */}
            <div className="fixed h-full w-[144px] content-center motion-opacity-in-0 motion-delay-500 motion-blur-in-sm motion-duration-1000 -motion-translate-x-in-[5%]">
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
            <main className="mx-[176px] text-sm">
                <div className="max-w-[960px] m-auto justify-items-center">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default Layout;
