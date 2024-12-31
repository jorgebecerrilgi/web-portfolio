import SubwayLines from "~/subway-lines";
import Footer from "./footer";
import Header from "./header";
import { subwayLinesA } from "./constants";

const Homepage = () => {
    return (
        <>
            <Header/>
            <div className="h-full py-1 bg-clip-content">
                <SubwayLines lines={subwayLinesA}/>
            </div>
            <Footer/>
        </>
    );
};

export default Homepage;
