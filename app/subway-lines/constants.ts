import type { SubwayLineColor } from "./types";

export const TAILWIND_STROKE_COLOR: Map<SubwayLineColor, string> = new Map([
    ["pink", "stroke-pink-500"],
    ["blue", "stroke-blue-700"],
    ["yellow", "stroke-yellow-400"],
]);

export const STATION_STROKE_WIDTH = 0.6;

export const MILLISECONDS_TO_ANIMATE: number = 1800;

export const MILLISECONDS_BEFORE_ENTER: number = 100;
