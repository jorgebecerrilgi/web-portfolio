import type { SubwayLine } from "~/subway-lines";

export const subwayLinesA: SubwayLine[] = [
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
    },
];
