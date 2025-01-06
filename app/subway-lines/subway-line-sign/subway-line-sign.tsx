import { useCallback, useEffect, useRef, useState } from "react";
import { useQueue, useTimeoutEffect } from "~/hooks";
import type { MouseEventSubwaySign, SubwaySign } from "./types";
import { BiRightArrowAlt } from "react-icons/bi";
import { renderSigns } from "./helpers";
import { SIGN_ARROW_ICON_SIZE, SIGN_MAX_QUEUE_SIZE, SIGN_SHOW_DELAY, SUBWAY_SIGN_ABOUT_ME, TAILWIND_BG_COLOR } from "./constants";

export interface SubwayLineSignProps {
    sign?: SubwaySign;
    expand?: boolean;
    onMouseEnterSign?: MouseEventSubwaySign;
    onMouseLeaveSign?: MouseEventSubwaySign;
    onClickSign?: React.MouseEventHandler<HTMLDivElement>;
};

const SubwayLineSign: React.FC<SubwayLineSignProps> = ({
    sign,
    expand = false,
    onMouseEnterSign,
    onMouseLeaveSign,
    onClickSign,
}) => {
    const { push, pop, items } = useQueue<[SubwaySign, number]>([]);
    const [prev, setPrev] = useState<SubwaySign>();
    // An identifier for the current selected sign.
    const [currentID, setCurrentID] = useState(0);
    // Wether the top queue sign should show.
    const [show, setShow] = useState<boolean>(false);
    // Wether the top queue sign is shown and has finished its slide-in animation.
    const [isCompletelyShown, setIsCompletelyShown] = useState(false);
    // Wether the current sign should expand.
    const [expanding, setExpanding] = useState(false);
    // Reference to the current sign DOM element.
    const currentRef = useRef<HTMLDivElement>(null);

    const handleOnMouseEnter = useCallback<React.MouseEventHandler<HTMLDivElement>>(e => {
        onMouseEnterSign?.(e, SUBWAY_SIGN_ABOUT_ME);
    }, [onMouseEnterSign]);
    const handleOnMouseLeave = useCallback<React.MouseEventHandler<HTMLDivElement>>(e => {
        onMouseLeaveSign?.(e, SUBWAY_SIGN_ABOUT_ME);
    }, [onMouseLeaveSign]);

    // Milliseconds before the sign appears (slide-in animation).
    const msToDelayShow = expand || (sign && sign === prev) ? SIGN_SHOW_DELAY : undefined;
    // Milliseconds that a sign takes to show up completely.
    const msToShow = show ? 200 : undefined;
    // Whether the top queue sign is already expanding.
    // The 'expand' prop only means that the sign SHOULD expand as soon as possible.
    const isExpanding = expand && isCompletelyShown;
    // Milliseconds before the sign starts expanding (scale-up animation).
    const msToDelayExpand = isExpanding ? 20 : undefined;
    
    useTimeoutEffect(() => setShow(true), msToDelayShow);
    useTimeoutEffect(() => setIsCompletelyShown(true), msToShow);
    useTimeoutEffect(() => setExpanding(true), msToDelayExpand);
    
    useEffect(() => {
        if (expand) return; // Freeze data when the sign is about to expand.
        setPrev(sign);
        setShow(false);
        setIsCompletelyShown(false);
        // Add sign to queue.
        if (sign) {
            if (items.length > SIGN_MAX_QUEUE_SIZE) pop();
            push([sign, currentID]);
            setCurrentID(curr => curr + 1);
        }
    }, [sign]);

    return (
        <>
            <div className={"relative text-sm font-medium py-1 h-[28px] overflow-hidden"}>
                <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={onClickSign}>
                    <div className={`absolute top-0 py-1 flex items-center duration-200 ${show ? "opacity-0" : ""}`}>
                        <h1>JORGE BECERRIL</h1>
                        <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
                    </div>

                    {renderSigns(items, show, currentRef)}
                </div>
            </div>
            {
                isExpanding && (
                    <div
                        className={`
                            fixed
                            text-sm text-white font-medium
                            py-1 pr-4
                            duration-500 ease-in-out
                            text-center content-center
                            ${TAILWIND_BG_COLOR.get(prev?.color ?? "black")}
                            ${expanding ? "top-0 left-0" : "top-[calc((100vh-(50vw/1.7)-38px)/2)] left-[25vw]"}
                        `}
                        style={{
                            width: expanding ? "100%" : `${currentRef.current?.getBoundingClientRect()?.width}px`,
                            height: expanding ? "100%" : `${currentRef.current?.getBoundingClientRect()?.height}px`
                        }}
                    >
                        <h1>{prev?.name}</h1>
                        <BiRightArrowAlt
                            className="absolute top-1/2 left-1/2"
                            style={{
                                translate: `${((currentRef.current?.getBoundingClientRect()?.width ?? 0) - SIGN_ARROW_ICON_SIZE - 14) / 2}px -${SIGN_ARROW_ICON_SIZE / 2}px`,
                            }}
                            size={SIGN_ARROW_ICON_SIZE}
                        />
                    </div>
                )
            }
        </>
    );
};

export default SubwayLineSign;
