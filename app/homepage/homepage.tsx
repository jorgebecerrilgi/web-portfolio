import SubwayLines, { type MouseEventSubwayLine, type SubwayLine } from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { MILLISECONDS_PER_ARRANGEMENT, SUBWAY_LINES_ARRANGEMENTS } from "./constants";
import { useIntervalEffect } from "~/hooks";
import { useCallback, useState } from "react";

const Homepage = () => {
    const [index, setIndex] = useState(0);
    const [hoveredLine, setHoveredLine] = useState<SubwayLine>();

    const handleOnMouseEnterLine = useCallback<MouseEventSubwayLine>((_, line) => setHoveredLine(line), []);
    const handleOnMouseLeaveLine = useCallback<MouseEventSubwayLine>(() => setHoveredLine(undefined), []);
    
    // Milliseconds to wait before cycling to the next arrangement.
    const msToCycle = !hoveredLine ? MILLISECONDS_PER_ARRANGEMENT : undefined;

    useIntervalEffect(() => {
        setIndex((index + 1) % 2);
    }, msToCycle);

    return (
        <>
            <Header sign={hoveredLine}/>
            <main className="h-full py-2 bg-clip-content">
                <SubwayLines
                    arrangements={SUBWAY_LINES_ARRANGEMENTS}
                    index={index}
                    onMouseEnterLine={handleOnMouseEnterLine}
                    onMouseLeaveLine={handleOnMouseLeaveLine}
                />
            </main>
            <Footer/>
        </>
    );
};

export default Homepage;
