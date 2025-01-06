import { useCallback, useState } from "react";
import type { SubwayLineSignProps } from "~/subway-lines";
import SubwayLineSign from "~/subway-lines/subway-line-sign";

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
