import type { SubwayLineColor } from "../types";

export const TAILWIND_BG_COLOR: Map<SubwayLineColor, string> = new Map([
    ["pink", "bg-pink-500"],
    ["blue", "bg-blue-700"],
    ["yellow", "bg-amber-400"],
    ["black", "bg-black"],
]);

export const SIGN_ARROW_ICON_SIZE = 16;

export const SIGN_MAX_QUEUE_SIZE = 5;

export const SIGN_SHOW_DELAY = 50;
