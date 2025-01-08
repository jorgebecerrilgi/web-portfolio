import { getColorFromRoutename } from "~/helpers";
import { MILLISECONDS_TO_ANIMATE, STATION_STROKE_WIDTH } from "./constants";
import type { ArrangementElements, MouseEventRoutename, SubwayLine, SubwayLineAnimationState } from "./types";

export const calculateState = (index: number, renderedIndex?: number): SubwayLineAnimationState => {
    if (renderedIndex === undefined) return "enter";
    if (renderedIndex === index) return "none";
    return "exit";
};

export const filterSubwayLines = (line: SubwayLine): boolean => {
    if (line.path.length <= 1) return false; // Incomplete path.
    
    const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = line.path;
    const dx = x2 - x1;
    const dy = y2 - y1;

    return dx === 0 || dy === 0; // Only horizontal or vertical initial movement.
};

export const getPathData = (path: Vector2[], vertical: boolean): string => {
    let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = path;

    if (vertical) [x1, y1, x2, y2] = [y1, x1, y2, x2];

    // Prefix path data to fix misalignment.
    const dx = x2 - x1;
    const isHorizontal = dx !== 0;

    const data = `M ${isHorizontal ? "-0.1 0.5" : "0.4 0"} m ${x1} ${y1} `;
    
    return data + path
        .slice(1)
        .map((curr, index) => {
            const prev = path[index];
            let dx = curr.x - prev.x;
            let dy = curr.y - prev.y;
            if (vertical) [dx, dy] = [dy, dx];
            return `l ${dx} ${dy}`;
        })
        .join(" ");
};

const calculateStrokeDashoffset = (
    state: SubwayLineAnimationState,
    strokeLength: number
): number => {
    if (state === "none") return strokeLength * 2;
    if (state === "enter") return strokeLength * 3;
    return strokeLength;
};

export const getArrangementElements = (
    state: SubwayLineAnimationState,
    arrangement?: SubwayLine[],
    vertical?: boolean,
    hoveredRoutename?: Routename,
    onMouseEnterLine?: MouseEventRoutename,
    onMouseLeaveLine?: MouseEventRoutename,
    onClickLine?: MouseEventRoutename,
): ArrangementElements => {
    const elements: ArrangementElements = {
        lines: [],
        stations: [],
    };

    arrangement?.filter(filterSubwayLines).forEach(line => {
        const { routename, path, stations, length } = line;
        const hover = hoveredRoutename === routename;
        const d = getPathData(path, vertical ?? false);

        elements.lines.push(
            <path
                className="cursor-pointer"
                style={{
                    transition: `stroke-dashoffset ${MILLISECONDS_TO_ANIMATE}ms, stroke-width 300ms`,
                    msTransition: `stroke-dashoffset ${MILLISECONDS_TO_ANIMATE}ms, stroke-width 300ms`,
                    strokeWidth: hover ? 1.2 : 1.0,
                    strokeLinejoin: "round",
                    strokeDasharray: length,
                    strokeDashoffset: calculateStrokeDashoffset(state, length),
                    stroke: getColorFromRoutename(routename).hex,
                }} // Missing styles in tailwind.
                d={d}
                onMouseEnter={() => onMouseEnterLine?.(routename)}
                onMouseLeave={() => onMouseLeaveLine?.(routename)}
                onClick={() => onClickLine?.(routename)}
                key={routename}
            ></path>
        );

        elements.stations.push(...stations.map((pos, i) => {
            const delay = state === "exit" ? 150 * i : 250 * (i + 1);
            const x = pos.x + 0.4;
            const y = pos.y;
            
            return (
                <circle
                    className="fill-white cursor-pointer"
                    style={{
                        transitionDuration: `${MILLISECONDS_TO_ANIMATE / 4}ms`,
                        msTransitionDuration: `${MILLISECONDS_TO_ANIMATE / 4}ms`,
                        transitionDelay: `${delay}ms`,
                        msTransitionDelay: `${delay}ms`,
                        transitionTimingFunction: "ease",
                        strokeWidth: state === "none" ? STATION_STROKE_WIDTH : 0,
                        stroke: getColorFromRoutename(routename).hex,
                    }}
                    cx={vertical ? y : x}
                    cy={vertical ? x : y}
                    r={state === "none" ? 1 : 0}
                    onMouseEnter={() => onMouseEnterLine?.(routename)}
                    onMouseLeave={() => onMouseLeaveLine?.(routename)}
                    onClick={() => onClickLine?.(routename)}
                    key={`${routename}-${x}-${y}`}
                />
            )
        }));
    });
    
    return elements;
};
