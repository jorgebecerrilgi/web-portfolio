import type { SubwayLine } from "../types";

export interface SubwaySign extends Omit<SubwayLine, "path" | "length" | "stations"> {}
