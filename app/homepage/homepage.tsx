import SubwayLines from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { useCallback, useState } from "react";
import { useIntervalEffect } from "~/hooks";
import { MS_TO_CYCLE, SUBWAYS } from "./constants";
import type { MouseEventSubwayLine } from "~/subway-lines";
import type { MouseEventSubwaySign, SubwaySign } from "~/subway-lines/subway-line-sign/types";

const Homepage = () => {
    const [index, setIndex] = useState(0);
    const [hoveredSign, setHoveredSign] = useState<SubwaySign>();
    const [navigateToSelection, setNavigateToSelection] = useState(false);

    const handleOnMouseEnterLine = useCallback<MouseEventSubwayLine>((_, line) => setHoveredSign(line), []);
    const handleOnMouseEnterSign = useCallback<MouseEventSubwaySign>((_, sign) => setHoveredSign(sign), []);
    const handleOnMouseLeaveLineOrSign = useCallback(() => setHoveredSign(undefined), []);
    const handleOnClickSelection = useCallback(() => setNavigateToSelection(true), []);
    
    const msToCycle = !hoveredSign ? MS_TO_CYCLE : undefined;
    
    useIntervalEffect(() => setIndex((index + 1) % 2) , msToCycle);

    return (
        <>
            <Header
                sign={hoveredSign}
                onMouseEnterSign={handleOnMouseEnterSign}
                onMouseLeaveSign={handleOnMouseLeaveLineOrSign}
                onClickSign={handleOnClickSelection}
                expand={navigateToSelection}
            />
            <main className="h-full py-2 bg-clip-content">
                <SubwayLines
                    arrangements={SUBWAYS}
                    index={index}
                    onMouseEnterLine={handleOnMouseEnterLine}
                    onMouseLeaveLine={handleOnMouseLeaveLineOrSign}
                    onClickLine={handleOnClickSelection}
                />
            </main>
            <Footer/>
        </>
    );
};

export default Homepage;
