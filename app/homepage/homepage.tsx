import SubwayLines, { type MouseEventSubwayLine } from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { MILLISECONDS_PER_ARRANGEMENT, SUBWAY_LINES_ARRANGEMENTS } from "./constants";
import { useIntervalEffect } from "~/hooks";
import { useState } from "react";

const Homepage = () => {
    const [index, setIndex] = useState(0);
    
    useIntervalEffect(() => {
        setIndex((index + 1) % 2);
    }, MILLISECONDS_PER_ARRANGEMENT);
    
    return (
        <>
            <Header/>
            <div className="h-full py-2 sm:py-1 bg-clip-content">
                <SubwayLines
                    arrangements={SUBWAY_LINES_ARRANGEMENTS}
                    index={index}
                />
            </div>
            <Footer/>
        </>
    );
};

export default Homepage;
