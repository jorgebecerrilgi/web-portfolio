import { twStrokeColor } from "./constants";
import type { MouseEventSubwayLine, SubwayLine } from "./types";

const filterSubwayLines = (line: SubwayLine): boolean => {
    if (line.path.length <= 1) return false; // Incomplete path.
    
    const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = line.path;
    const dx = x2 - x1;
    const dy = y2 - y1;

    return dx === 0 || dy === 0; // Only horizontal or vertical initial movement.
};

const createPathData = (path: Vector2[]): string => {
    const [{ x: x1, y: y1 }, { x: x2 }] = path;

    // Prefix path data to fix misalignment.
    const dx = x2 - x1;
    const isHorizontal = dx !== 0;
    const data = `M ${isHorizontal ? "-0.1 0.5" : "0.4 0"} m ${x1} ${y1} `;
    
    return data + path
        .slice(1)
        .map((curr, index) => {
            const prev = path[index];
            const dx = curr.x - prev.x;
            const dy = curr.y - prev.y;
            return `l ${dx} ${dy}`;
        })
        .join(" ");
};

const renderSubwayLines = (
    lines?: SubwayLine[],
    onMouseEnterLine?: MouseEventSubwayLine,
    onMouseLeaveLine?: MouseEventSubwayLine,
) => {
    return lines?.
        filter(filterSubwayLines)
        .map((line: SubwayLine) => {
            const { path, color } = line;
            const d = createPathData(path);
            return (
                <path
                    className={`duration-200 ${twStrokeColor.get(color)}`}
                    style={{ strokeLinejoin: "round" }} // Missing style in tailwind.
                    d={d}
                    key={color}
                    onMouseEnter={e => onMouseEnterLine?.(e, line)}
                    onMouseLeave={e => onMouseLeaveLine?.(e, line)}
                ></path>
            );
        });
};

interface SubwayLinesProps {
    lines?: SubwayLine[];
    onMouseEnterLine?: MouseEventSubwayLine;
    onMouseLeaveLine?: MouseEventSubwayLine;
}

const SubwayLines: React.FC<SubwayLinesProps> = ({
    lines,
    onMouseEnterLine,
    onMouseLeaveLine,
}) => {
    return (
        <svg className="w-full h-full" viewBox="0 0 45 26" fill="none">
            {renderSubwayLines(lines, onMouseEnterLine, onMouseLeaveLine)}
        </svg>
    );
};

export default SubwayLines;
