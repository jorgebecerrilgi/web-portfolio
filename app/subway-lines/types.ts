export type SubwayLineAnimation = "enter" | "none" | "exit"; 

export type SubwayLineColor = "pink" | "blue" | "yellow";

export interface SubwayLine {
    color: SubwayLineColor;
    path: Vector2[];
    length: number;
}

export type MouseEventSubwayLine = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    line: SubwayLine
) => void;
