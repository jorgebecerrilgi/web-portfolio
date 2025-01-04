import type { JSX } from "react";

export type SubwayLineAnimationState = "enter" | "none" | "exit"; 

export type SubwayLineColor = "pink" | "blue" | "yellow" | "black";

export interface SubwayLine {
    name: string;
    color: SubwayLineColor;
    path: Vector2[];
    stations: Vector2[];
    length: number;
}

export interface ArrangementElements {
    lines: JSX.Element[];
    stations: JSX.Element[];
}

export type MouseEventSubwayLine = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    line: SubwayLine
) => void;
