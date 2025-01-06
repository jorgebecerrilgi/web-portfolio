import SubwayLines, { type MouseEventSubwayLine, type SubwayLine } from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { MILLISECONDS_PER_ARRANGEMENT, SUBWAY_LINES_ARRANGEMENTS } from "./constants";
import { useIntervalEffect } from "~/hooks";
import { useCallback, useState } from "react";
import type { MouseEventSubwaySign, SubwaySign } from "~/subway-lines/subway-line-sign/types";

const Homepage = () => {
    const [index, setIndex] = useState(0);
    const [hoveredSign, setHoveredSign] = useState<SubwaySign>();
    const [selectedSign, setSelectedSign] = useState<SubwaySign>();

    const handleOnMouseEnterLine = useCallback<MouseEventSubwayLine>((_, line) => setHoveredSign(line), []);
    const handleOnMouseEnterSign = useCallback<MouseEventSubwaySign>((_, sign) => setHoveredSign(sign), []);
    const handleOnMouseLeaveLineOrSign = useCallback(() => setHoveredSign(undefined), []);
    const handleOnClick = useCallback(() => setSelectedSign(prev => prev ?? hoveredSign), [hoveredSign]);
    
    const msToCycle = !hoveredSign ? MILLISECONDS_PER_ARRANGEMENT : undefined;
    const shouldNavigateToSelection = selectedSign !== undefined;

    useIntervalEffect(() => {
        setIndex((index + 1) % 2);
    }, msToCycle);

    return (
        <>
            <Header
                sign={hoveredSign}
                onMouseEnterSign={handleOnMouseEnterSign}
                onMouseLeaveSign={handleOnMouseLeaveLineOrSign}
                onClickSign={handleOnClick}
                expand={shouldNavigateToSelection}
            />
            <main className="h-full py-2 bg-clip-content">
                <SubwayLines
                    arrangements={SUBWAY_LINES_ARRANGEMENTS}
                    index={index}
                    onMouseEnterLine={handleOnMouseEnterLine}
                    onMouseLeaveLine={handleOnMouseLeaveLineOrSign}
                    onClickLine={handleOnClick}
                />
            </main>
            <Footer/>
        </>
    );
};

export default Homepage;
