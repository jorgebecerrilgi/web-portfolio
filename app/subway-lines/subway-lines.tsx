import { useState } from "react";
import type { MouseEventSubwayLine, SubwayLine, SubwayLineAnimation } from "./types";
import { useIntervalEffect, useMediaQuery } from "~/hooks";
import { MILLISECONDS_BEFORE_ENTER, MILLISECONDS_TO_ANIMATE, TAILWIND_STROKE_COLOR } from "./constants";
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
    const isMobile = useMediaQuery("(max-width: 640px)");
    // The animation aimed to be played in this render.
    const state: SubwayLineAnimation = calculateState(index, renderedIndex);
    // The index about to be rendered in this step.
    // Aka the current index unless the previous hasn't exited, yet.
    const targetIndex = renderedIndex ?? index;

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
            {
                renderSubwayLines(
                    state,
                    arrangements?.[targetIndex],
                    isMobile,
                    onMouseEnterLine,
                    onMouseLeaveLine
                )
            }
        </svg>
    );
};

export default SubwayLines;
