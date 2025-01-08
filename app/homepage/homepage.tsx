import SubwayLines from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { useCallback, useState } from "react";
import { useIntervalEffect } from "~/hooks";
import { MS_TO_CYCLE, SUBWAYS } from "./constants";
import type { MouseEventRoutename } from "~/subway-lines";

const Homepage = () => {
    const [index, setIndex] = useState(0);
    const [hoveredRoutename, setHoveredRoutename] = useState<Routename>();
    const [navigateToSelection, setNavigateToSelection] = useState(false);

    const handleOnMouseEnter = useCallback<MouseEventRoutename>(routename => setHoveredRoutename(routename), []);
    const handleOnMouseLeave = useCallback(() => setHoveredRoutename(undefined), []);
    const handleOnClickSelection = useCallback(() => setNavigateToSelection(true), []);
    
    const msToCycle = !hoveredRoutename ? MS_TO_CYCLE : undefined;
    
    useIntervalEffect(() => setIndex((index + 1) % 2) , msToCycle);

    return (
        <>
            <Header
                routename={hoveredRoutename}
                onMouseEnterSign={handleOnMouseEnter}
                onMouseLeaveSign={handleOnMouseLeave}
                onClickSign={handleOnClickSelection}
                expand={navigateToSelection}
            />
            <main className="h-full py-2 bg-clip-content">
                <SubwayLines
                    arrangements={SUBWAYS}
                    index={index}
                    onMouseEnterLine={handleOnMouseEnter}
                    onMouseLeaveLine={handleOnMouseLeave}
                    onClickLine={handleOnClickSelection}
                />
            </main>
            <Footer/>
        </>
    );
};

export default Homepage;
