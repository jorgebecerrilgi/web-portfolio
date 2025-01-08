import SubwayLineSign from "~/subway-lines/subway-line-sign";
import type { SubwayLineSignProps } from "~/subway-lines";

interface HeaderProps extends SubwayLineSignProps {};

const Header: React.FC<HeaderProps> = ({ routename, expand, onMouseEnterSign, onMouseLeaveSign, onClickSign }) => {
    return (
        <header className="motion-opacity-in-0 motion-delay-200">
            <SubwayLineSign
                routename={routename}
                onMouseEnterSign={onMouseEnterSign}
                onMouseLeaveSign={onMouseLeaveSign}
                onClickSign={onClickSign}
                expand={expand}
            />
        </header>
    );
};

export default Header;
