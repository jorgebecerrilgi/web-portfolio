import SubwayLineSign from "~/subway-lines/subway-line-sign";
import type { SubwayLineSignProps } from "~/subway-lines";

interface HeaderProps extends SubwayLineSignProps {};

const Header: React.FC<HeaderProps> = ({ sign, expand, onMouseEnterSign, onMouseLeaveSign, onClickSign }) => {
    return (
        <header>
            <SubwayLineSign
                sign={sign}
                onMouseEnterSign={onMouseEnterSign}
                onMouseLeaveSign={onMouseLeaveSign}
                onClickSign={onClickSign}
                expand={expand}
            />
        </header>
    );
};

export default Header;
