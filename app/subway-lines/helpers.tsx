import { MILLISECONDS_TO_ANIMATE, STATION_STROKE_WIDTH, TAILWIND_STROKE_COLOR } from "./constants";
import type { ArrangementElements, MouseEventSubwayLine, SubwayLine, SubwayLineAnimationState } from "./types";

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
    onMouseEnterLine?: MouseEventSubwayLine,
    onMouseLeaveLine?: MouseEventSubwayLine,
): ArrangementElements => {
    const elements: ArrangementElements = {
        lines: [],
        stations: [],
    };

    arrangement?.filter(filterSubwayLines).forEach(line => {
        const { path, color, stations, length } = line;
        const d = getPathData(path, vertical ?? false);

        elements.lines.push(
            <path
                className={`${TAILWIND_STROKE_COLOR.get(color)}`}
                style={{
                    transitionDuration: `${MILLISECONDS_TO_ANIMATE}ms`,
                    msTransitionDuration: `${MILLISECONDS_TO_ANIMATE}ms`,
                    strokeLinejoin: "round",
                    strokeDasharray: length,
                    strokeDashoffset: calculateStrokeDashoffset(state, length),
                }} // Missing styles in tailwind.
                d={d}
                onMouseEnter={e => onMouseEnterLine?.(e, line)}
                onMouseLeave={e => onMouseLeaveLine?.(e, line)}
                key={color}
            ></path>
        );

        elements.stations.push(...stations.map((pos, i) => {
            const delay = state === "exit" ? 150 * i : 250 * (i + 1);
            const x = pos.x + 0.4;
            const y = pos.y;
            
            return (
                <circle
                    className={`
                        stroke-[${state === "none" ? STATION_STROKE_WIDTH : "0"}]
                        fill-white
                        ${TAILWIND_STROKE_COLOR.get(color)}
                    `}
                    style={{
                        transitionDuration: `${MILLISECONDS_TO_ANIMATE / 4}ms`,
                        msTransitionDuration: `${MILLISECONDS_TO_ANIMATE / 4}ms`,
                        transitionDelay: `${delay}ms`,
                        msTransitionDelay: `${delay}ms`,
                        transitionTimingFunction: "ease"
                    }}
                    cx={vertical ? y : x}
                    cy={vertical ? x : y}
                    r={state === "none" ? "1" : "0"}
                />
            )
        }));
    });
    
    return elements;
};
