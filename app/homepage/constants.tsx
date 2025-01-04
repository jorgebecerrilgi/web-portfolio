import { MdEmail } from "react-icons/md";
import type { SubwayLine } from "~/subway-lines";
import type { SubwaySign } from "~/subway-lines/subway-line-sign/types";
import type { FooterLinks } from "./types";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const SUBWAY_LINES_A: SubwayLine[] = [
    {
        name: "PROYECTOS",
        color: "blue",
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
        name: "SOBRE MI",
        color: "yellow",
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
        name: "EXPERIENCIA",
        color: "pink",
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

export const SUBWAY_LINES_B: SubwayLine[] = [
    {
        name: "PROYECTOS",
        color: "blue",
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
        name: "SOBRE MI",
        color: "yellow",
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
        name: "EXPERIENCIA",
        color: "pink",
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

export const SUBWAY_LINES_ARRANGEMENTS: SubwayLine[][] = [
    SUBWAY_LINES_A,
    SUBWAY_LINES_B,
];

export const MILLISECONDS_PER_ARRANGEMENT: number = 5000;

export const SUBWAY_SIGN_ABOUT_ME: SubwaySign = { name: "JORGE BECERRIL", color: "black" };

export const FOOTER_LINKS: FooterLinks[] = [
    {
        href: "mailto:jorgebecerrilgm@gmail.com",
        "aria-label": "email",
        icon: <MdEmail size={14}/>,
    },
    {
        href: "https://www.linkedin.com/in/jorgebecerril",
        "aria-label": "linkedin",
        icon: <FaLinkedinIn size={14}/>,
    },
    {
        href: "https://www.github.com/jorgebecerrilgi",
        "aria-label": "github",
        icon: <FaGithub size={13}/>,
    },
];
