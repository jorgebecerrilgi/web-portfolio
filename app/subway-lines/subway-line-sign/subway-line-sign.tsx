import { useEffect, useState } from "react";
import { useQueue, useTimeoutEffect } from "~/hooks";
import type { SubwaySign } from "./types";
import { BiRightArrowAlt } from "react-icons/bi";
import { renderSigns } from "./helpers";
import { SIGN_ARROW_ICON_SIZE } from "./constants";

export interface SubwayLineSignProps {
    sign?: SubwaySign;
    onMouseEnterSign?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeaveSign?: React.MouseEventHandler<HTMLDivElement>;
};

const SubwayLineSign: React.FC<SubwayLineSignProps> = ({
    sign,
    onMouseEnterSign,
    onMouseLeaveSign,
}) => {
    const { push, pop, items } = useQueue<[SubwaySign, number]>([]);
    const [prev, setPrev] = useState<SubwaySign>();
    // An identifier for the current selected sign.
    const [currentID, setCurrentID] = useState(0);
    // Wether the top queue sign should show.
    const [show, setShow] = useState<boolean>(false);

    useTimeoutEffect(() => {
        setShow(true);
    }, sign && sign === prev ? 100 : undefined);
    
    useEffect(() => {
        setPrev(sign);
        setShow(false);
        // Add sign to queue.
        if (sign) {
            if (items.length > 5) pop();
            push([sign, currentID]);
            setCurrentID(curr => curr + 1);
        }
    }, [sign]);

    return (
        <div
            className="relative w-fit text-xs font-medium py-1 overflow-hidden"
            onMouseEnter={onMouseEnterSign}
            onMouseLeave={onMouseLeaveSign}
        >
            <div className={`flex duration-200 ${show ? "opacity-0" : ""}`}>
                {/* The default title */}
                <h1>JORGE BECERRIL</h1>
                <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
            </div>

            {renderSigns(items, show)}
        </div>
    );
};

export default SubwayLineSign;
