import { useEffect, useState } from "react";
import { useIntervalEffect, useQueue, useTimeoutEffect } from "~/hooks";
import type { SubwaySign } from "./types";
import { TAILWIND_BG_COLOR } from "./constants";
import { ImArrowRight } from "react-icons/im";
import { BiRightArrowAlt } from "react-icons/bi";

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
    const { push, pop, top, items } = useQueue<[SubwaySign, number]>([]);
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
                <BiRightArrowAlt size={16}/>
            </div>

            {
                items.map(([{ name, color }, id], index)=> {
                    // All items but the top one have exited.
                    const exited = index < items.length - 1;
                    
                    return (
                        <div
                            className={`
                                absolute top-0 py-1
                                text-white
                                duration-200 ease-in-out
                                overflow-hidden
                                ${exited || !show ? "-translate-x-[101%]" : ""}
                                ${TAILWIND_BG_COLOR.get(color)}
                            `}
                            key={id}
                        >
                            {/* Determines the size of the sign container. */}
                            <div className="flex">
                                <p className="invisible">{name}</p>
                                <BiRightArrowAlt size={16}/>
                            </div>
                            {/* The text to be displayed. */}
                            <div
                                className={`
                                    absolute top-0 py-1
                                    flex
                                    duration-200 ease-in-out
                                    ${exited || !show ? "translate-x-[101%]" : ""}
                                `}
                            >
                                <h2>{name}</h2>
                                <BiRightArrowAlt size={16}/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SubwayLineSign;
