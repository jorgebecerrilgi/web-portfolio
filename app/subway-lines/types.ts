import type { JSX } from "react";

export type SubwayLineAnimationState = "enter" | "none" | "exit"; 

export interface SubwayLine {
    routename: Routename;
    path: Vector2[];
    stations: Vector2[];
    length: number;
}

export interface ArrangementElements {
    lines: JSX.Element[];
    stations: JSX.Element[];
}

export type MouseEventRoutename = (routename: Routename) => void;
