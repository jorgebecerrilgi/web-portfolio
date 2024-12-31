export type SubwayLineColor = "pink" | "blue" | "yellow";

export interface SubwayLine {
    color: SubwayLineColor;
    path: Vector2[];
}

export type MouseEventSubwayLine = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    line: SubwayLine
) => void;
