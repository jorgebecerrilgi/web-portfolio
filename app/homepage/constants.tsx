import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { SubwayLine } from "~/subway-lines";
import type { FooterIcon } from "./types";

export const SUBWAY_A: SubwayLine[] = [
    {
        routename: "other-projects",
        path: [
            { x: 27, y: 0 },
            { x: 27, y: 21 },
            { x: 16.6, y: 21 },
            { x: 11, y: 15.4 },
            { x: 11, y: 14 },
            { x: -1, y: 14 }, // Misalignment case not handled.
        ],
        stations: [
            { x: 27, y: 21 },
            { x: 18, y: 21 },
            { x: 11, y: 14 },
        ],
        length: 52.72,
    },
    {
        routename: "historico-de-performance",
        path: [
            { x: 26, y: 0 },
            { x: 26, y: 7 },
            { x: 11, y: 7 },
            { x: 11, y: 14 },
            { x: 19, y: 22 },
            { x: 30, y: 22 },
            { x: 30, y: 17 },
            { x: 45, y: 17 },
        ],
        stations: [
            { x: 26, y: 7 },
            { x: 16, y: 7 },
            { x: 30, y: 22 },
            { x: 30, y: 17 },
        ],
        length: 71.314,
    },
    {
        routename: "globo-politico",
        path: [
            { x: 16, y: 0 },
            { x: 16, y: 15 },
            { x: 26, y: 15 },
            { x: 26, y: 7 },
            { x: 31, y: 7 },
            { x: 37, y: 13 },
            { x: 37, y: 26 },
        ],
        stations: [
            { x: 16, y: 15 },
            { x: 26, y: 15 },
            { x: 37, y: 13 },
            { x: 37, y: 17 },
        ],
        length: 59.485,
    },
];

export const SUBWAY_B: SubwayLine[] = [
    {
        routename: "other-projects",
        path: [
            { x: 14, y: 26 },
            { x: 14, y: 10 },
            { x: 27, y: 10 },
            { x: 31, y: 6 },
            { x: 34, y: 6 },
            { x: 34, y: 21 },
            { x: 45, y: 21 },
        ],
        stations: [
            { x: 14, y: 16 },
            { x: 27, y: 10 },
            { x: 34, y: 21 },
        ],
        length: 63.657,
    },
    {
        routename: "historico-de-performance",
        path: [
            { x: 31, y: 26 },
            { x: 31, y: 6 },
            { x: 24, y: 6 },
            { x: 14, y: 16 },
            { x: 4, y: 16 },
            { x: 4, y: 7 },
            { x: -1, y: 7 }, // Misalignment case not handled.
        ],
        stations: [
            { x: 31, y: 6 },
            { x: 999, y: 999 }, // Invalid to create delay.
            { x: 4, y: 16 },
            { x: 4, y: 7 },
        ],
        length: 65.142,
    },
    {
        routename: "globo-politico",
        path: [
            { x: 9, y: 0 },
            { x: 9, y: 5 },
            { x: 27, y: 5 },
            { x: 27, y: 11 },
            { x: 20, y: 11 },
            { x: 20, y: 19 },
            { x: -1, y: 19 },  // Misalignment case not handled.
        ],
        stations: [
            { x: 9, y: 5 },
            { x: 27, y: 6 },
            { x: 14, y: 19 },
        ],
        length: 65,
    },
];

export const SUBWAYS: SubwayLine[][] = [
    SUBWAY_A,
    SUBWAY_B,
];

export const MS_TO_CYCLE: number = 5000;

const FOOTER_ICON_SIZE = 14;

export const FOOTER_ICONS: FooterIcon[] = [
    {
        href: "mailto:jorgebecerrilgm@gmail.com",
        "aria-label": "email",
        icon: <MdEmail size={FOOTER_ICON_SIZE}/>,
    },
    {
        href: "https://www.linkedin.com/in/jorgebecerril",
        "aria-label": "linkedin",
        icon: <FaLinkedinIn size={FOOTER_ICON_SIZE}/>,
    },
    {
        href: "https://www.github.com/jorgebecerrilgi",
        "aria-label": "github",
        icon: <FaGithub size={FOOTER_ICON_SIZE - 1}/>,
    },
];
