import { useCallback, useState } from "react";
import type { MouseEventSubwayLine, SubwayLine, SubwayLineColor } from "./types";
import { useIntervalEffect, useMediaQuery } from "~/hooks";
import { MILLISECONDS_BEFORE_ENTER, MILLISECONDS_TO_ANIMATE } from "./constants";
import { calculateState, getArrangementElements } from "./helpers";

interface SubwayLinesProps {
    arrangements?: SubwayLine[][];
    index?: number;
    onMouseEnterLine?: MouseEventSubwayLine;
    onMouseLeaveLine?: MouseEventSubwayLine;
};

const SubwayLines: React.FC<SubwayLinesProps> = ({
    arrangements,
    index = 0,
    onMouseEnterLine,
    onMouseLeaveLine,
}) => {
    const [renderedIndex, setRenderedIndex] = useState<number>();
    // The color of the current hovered line.
    const [hoveredColor, setHoveredColor] = useState<SubwayLineColor>();
    const isMobile = useMediaQuery("(max-width: 640px)");
    // The animation aimed to be played in this render.
    const state = calculateState(index, renderedIndex);
    // The index about to be rendered in this step.
    // Aka the current index unless the previous hasn't exited, yet.
    const targetIndex = renderedIndex ?? index;

    const handleOnMouseEnterLine = useCallback<MouseEventSubwayLine>((e, line) => {
        setHoveredColor(line.color);
        onMouseEnterLine?.(e, line);
    }, [onMouseEnterLine]);

    const handleOnMouseLeaveLine = useCallback<MouseEventSubwayLine>((e, line) => {
        setHoveredColor(undefined);
        onMouseLeaveLine?.(e, line);
    }, [onMouseEnterLine]);

    // Create lists of JSX elements for lines and stations.
    const { lines, stations } = getArrangementElements(
        state,
        arrangements?.[targetIndex],
        isMobile,
        hoveredColor,
        handleOnMouseEnterLine,
        handleOnMouseLeaveLine,
    );

    // Once the exit animation finishes, clear renderedIndex.
    useIntervalEffect(() => {
        setRenderedIndex(undefined);
    }, state === "exit" ? MILLISECONDS_TO_ANIMATE : undefined);

    // Delay the enter animation for css transitions to work.
    // This ensures the DOM elements are already rendered in their initial state.
    useIntervalEffect(() => {
        setRenderedIndex(index);
    }, state === "enter" ? MILLISECONDS_BEFORE_ENTER : undefined);
    
    return (
        <svg
            className="w-full h-full"
            viewBox={`0 0 ${isMobile ? "26 45" : "45 26"}`}
            fill="none"
            // This ensures each arrangement uses distinct DOM elements.
            key={`${isMobile ? "m" : ""}${targetIndex}`}
        >
            {lines.map(line => line)}
            {stations.map(station => station)}
        </svg>
    );
};

export default SubwayLines;
