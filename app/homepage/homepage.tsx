import SubwayLines, { type MouseEventSubwayLine, type SubwayLine } from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { MILLISECONDS_PER_ARRANGEMENT, SUBWAY_LINES_ARRANGEMENTS } from "./constants";
import { useIntervalEffect } from "~/hooks";
import { useCallback, useState } from "react";

const Homepage = () => {
    const [index, setIndex] = useState(0);
    const [enableCycle, setEnableCycle] = useState(true);
    const [hoveredLine, setHoveredLine] = useState<SubwayLine>();

    const handleOnMouseEnterLine = useCallback<MouseEventSubwayLine>((e, line) => {
        setEnableCycle(false);
        setHoveredLine(line);
    }, []);
    const handleOnMouseLeaveLine = useCallback<MouseEventSubwayLine>((e, line) => {
        setEnableCycle(true);
        setHoveredLine(undefined);
    }, []);
    
    // Milliseconds to wait before cycling to the next arrangement.
    const msToCycle = enableCycle ? MILLISECONDS_PER_ARRANGEMENT : undefined;

    useIntervalEffect(() => {
        setIndex((index + 1) % 2);
    }, msToCycle);

    return (
        <>
            <Header sign={hoveredLine}/>
            <div className="h-full py-2 bg-clip-content">
                <SubwayLines
                    arrangements={SUBWAY_LINES_ARRANGEMENTS}
                    index={index}
                    onMouseEnterLine={handleOnMouseEnterLine}
                    onMouseLeaveLine={handleOnMouseLeaveLine}
                />
            </div>
            <Footer/>
        </>
    );
};

export default Homepage;
