import type { SubwayLine } from "~/subway-lines";

export const SUBWAY_LINES_A: SubwayLine[] = [
    {
        color: "blue",
        path: [
            { x: 27, y: 0 },
            { x: 27, y: 21 },
            { x: 16.6, y: 21 },
            { x: 11, y: 15.4 },
            { x: 11, y: 14 },
            { x: -1, y: 14 }, // Misalignment case not handled.
        ],
        length: 52.72,
    },
    {
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
        length: 71.314,
    },
    {
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
        length: 59.485,
    },
];

export const SUBWAY_LINES_B: SubwayLine[] = [
    {
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
        length: 63.657,
    },
    {
        color: "yellow",
        path: [
            { x: 31, y: 26 },
            { x: 31, y: 6 },
            { x: 24, y: 6 },
            { x: 14, y: 16 },
            { x: 4, y: 16 },
            { x: 4, y: 7 },
            { x: 0, y: 7 },
        ],
        length: 64.142,
    },
    {
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
        length: 65,
    },
];

export const SUBWAY_LINES_ARRANGEMENTS: SubwayLine[][] = [
    SUBWAY_LINES_A,
    SUBWAY_LINES_B,
];

export const MILLISECONDS_PER_ARRANGEMENT: number = 5000;
