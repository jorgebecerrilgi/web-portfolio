import type { SubwayLine } from "../types";

export interface SubwaySign extends Omit<SubwayLine, "path" | "length" | "stations"> {}

export type MouseEventSubwaySign = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    sign: SubwaySign,
) => void;
