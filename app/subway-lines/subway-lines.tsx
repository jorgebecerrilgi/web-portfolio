import { useEffect, useState } from "react";
import type { MouseEventSubwayLine, SubwayLine, SubwayLineAnimation } from "./types";
import { useIntervalEffect } from "~/hooks";
import { MILLISECONDS_TO_ANIMATE, TAILWIND_STROKE_COLOR } from "./constants";
import { calculateState, renderSubwayLines } from "./helpers";

interface SubwayLinesProps {
    arrangements?: SubwayLine[][];
    index?: number;
    onMouseEnterLine?: MouseEventSubwayLine;
    onMouseLeaveLine?: MouseEventSubwayLine;
}

const SubwayLines: React.FC<SubwayLinesProps> = ({
    arrangements,
    index = 0,
    onMouseEnterLine,
    onMouseLeaveLine,
}) => {
    const [renderedIndex, setRenderedIndex] = useState<number>();
    // The animation aimed to be played in this render.
    const state: SubwayLineAnimation = calculateState(index, renderedIndex);
    // The index about to be rendered in this step.
    // Aka the current index unless the previous hasn't exited, yet.
    const targetIndex = renderedIndex ?? index;

    // Once the exit animation finishes, clear renderedIndex.
    useIntervalEffect(() => {
        setRenderedIndex(undefined);
    }, state === "exit" ? MILLISECONDS_TO_ANIMATE : undefined);

    // Begin to render index.
    useEffect(() => {
        if (state === "enter") setRenderedIndex(index);
    }, [index, renderedIndex]);
    
    return (
        <svg
            className="w-full h-full"
            viewBox="0 0 45 26"
            fill="none"
            key={targetIndex} // This assures each arrangement uses distinct DOM elements.
        >
            {
                renderSubwayLines(
                    state,
                    arrangements?.[targetIndex],
                    onMouseEnterLine,
                    onMouseLeaveLine
                )
            }
        </svg>
    );
};

export default SubwayLines;
