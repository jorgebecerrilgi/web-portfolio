import { useCallback, useState } from "react";
import type { SubwayLineSignProps } from "~/subway-lines";
import SubwayLineSign from "~/subway-lines/subway-line-sign";
import { SUBWAY_SIGN_ABOUT_ME } from "./constants";

interface HeaderProps extends SubwayLineSignProps {};

const Header: React.FC<HeaderProps> = ({ sign }) => {
    const [showAboutMeSign, setShowAboutMeSign] = useState(false);

    const handleOnMouseEnterSign = useCallback(() => setShowAboutMeSign(true), []);
    const handleOnMouseLeaveSign = useCallback(() => setShowAboutMeSign(false), []);
    
    return (
        <header>
            <SubwayLineSign
                sign={showAboutMeSign ? SUBWAY_SIGN_ABOUT_ME : sign}
                onMouseEnterSign={handleOnMouseEnterSign}
                onMouseLeaveSign={handleOnMouseLeaveSign}
            />
        </header>
    );
};

export default Header;
