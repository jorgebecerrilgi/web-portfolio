import { BLACK, BLUE, PINK, YELLOW } from "./constants";

export const getRoutenameFromPathname = (pathname: string): Routename | undefined => {
    if (pathname.includes("about-me")) return "about-me";
    if (pathname.includes("globo-politico")) return "globo-politico";
    if (pathname.includes("historico-de-performance")) return "historico-de-performance";
    if (pathname.includes("other-projects")) return "other-projects";
};

export const getColorFromRoutename = (routename?: Routename): Color => {
    switch (routename) {
        case "about-me": return BLACK;
        case "globo-politico": return PINK;
        case "historico-de-performance": return YELLOW;
        case "other-projects": return BLUE;
        default: return BLACK;
    }
};

export const getNameFromRoutename = (routename?: Routename) => {
    return (routename === "about-me" ? "jorge-becerril" : routename)?.split("-").join(" ").toUpperCase();
};
