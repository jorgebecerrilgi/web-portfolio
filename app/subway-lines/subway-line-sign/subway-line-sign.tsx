import { useEffect, useState } from "react";
import { useQueue, useTimeoutEffect } from "~/hooks";
import type { SubwaySign } from "./types";
import { BiRightArrowAlt } from "react-icons/bi";
import { renderSigns } from "./helpers";
import { SIGN_ARROW_ICON_SIZE, SIGN_MAX_QUEUE_SIZE, SIGN_SHOW_DELAY } from "./constants";

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
    const { push, pop, back, items } = useQueue<[SubwaySign, number]>([]);
    const [prev, setPrev] = useState<SubwaySign>();
    // An identifier for the current selected sign.
    const [currentID, setCurrentID] = useState(0);
    // Wether the top queue sign should show.
    const [show, setShow] = useState<boolean>(false);
    
    const currentSign = back()?.[0];

    useTimeoutEffect(() => {
        setShow(true);
    }, sign && sign === prev ? SIGN_SHOW_DELAY : undefined);
    
    useEffect(() => {
        setPrev(sign);
        setShow(false);
        // Add sign to queue.
        if (sign) {
            if (items.length > SIGN_MAX_QUEUE_SIZE) pop();
            push([sign, currentID]);
            setCurrentID(curr => curr + 1);
        }
    }, [sign]);

    return (
        <div className="relative text-xs font-medium py-1 overflow-hidden">
            {/* Determines the size of the relative container */}
            <div className="h-[16px]"></div>

            {/* Sign title */}
            <div onMouseEnter={onMouseEnterSign} onMouseLeave={onMouseLeaveSign}>
                <div className={`absolute top-0 py-1 flex duration-200 ${show ? "opacity-0" : ""}`}>
                    <h1>JORGE BECERRIL</h1>
                    <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
                </div>

                {renderSigns(items, show)}
            </div>

        </div>
    );
};

export default SubwayLineSign;
