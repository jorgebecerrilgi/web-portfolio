export type SubwayLineColor = "pink" | "blue" | "yellow";

export interface SubwayLine {
    color: SubwayLineColor;
    path: Vector2[];
}
