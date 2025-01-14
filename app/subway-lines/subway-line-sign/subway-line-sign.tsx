import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery, useQueue, useTimeoutEffect } from "~/hooks";
import { BiRightArrowAlt } from "react-icons/bi";
import { renderSigns } from "./helpers";
import { SIGN_ARROW_ICON_SIZE, SIGN_MAX_QUEUE_SIZE, SIGN_SHOW_DELAY } from "./constants";
import { useNavigate } from "react-router";
import type { MouseEventRoutename } from "../types";
import { getColorFromRoutename, getNameFromRoutename } from "~/helpers";

export interface SubwayLineSignProps {
    routename?: Routename;
    expand?: boolean;
    onMouseEnterSign?: MouseEventRoutename;
    onMouseLeaveSign?: MouseEventRoutename;
    onClickSign?: MouseEventRoutename;
};

const SubwayLineSign: React.FC<SubwayLineSignProps> = ({
    routename,
    expand = false,
    onMouseEnterSign,
    onMouseLeaveSign,
    onClickSign,
}) => {
    const { push, pop, items } = useQueue<[Routename, number]>([]);
    const [prev, setPrev] = useState<Routename>();
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
    const isMobile = useMediaQuery("(max-width: 640px)");

    const navigate = useNavigate();

    const handleOnMouseEnter = useCallback(() => onMouseEnterSign?.("about-me"), [onMouseEnterSign]);
    const handleOnMouseLeave = useCallback(() => onMouseLeaveSign?.("about-me"), [onMouseLeaveSign]);
    const handleOnClick = useCallback(() => onClickSign?.("about-me"), [onClickSign]);

    // Milliseconds before the sign appears (slide-in animation).
    const msToDelayShow = expand || (routename && routename === prev) ? SIGN_SHOW_DELAY : undefined;
    // Milliseconds that a sign takes to show up completely.
    const msToShow = show ? 200 : undefined;
    // Whether the top queue sign is already expanding.
    // The 'expand' prop only means that the sign SHOULD expand as soon as possible.
    const isExpanding = expand && isCompletelyShown;
    // Milliseconds before the sign starts expanding (scale-up animation).
    const msToDelayExpand = isExpanding ? 20 : undefined;
    const msToExpand = expanding ? 500 : undefined;
    
    useTimeoutEffect(() => setShow(true), msToDelayShow);
    useTimeoutEffect(() => setIsCompletelyShown(true), msToShow);
    useTimeoutEffect(() => setExpanding(true), msToDelayExpand);
    useTimeoutEffect(() => navigate(prev ?? routename ?? "about-me"), msToExpand);
    
    useEffect(() => {
        if (expand) return; // Freeze data when the sign is about to expand.
        setPrev(routename);
        setShow(false);
        setIsCompletelyShown(false);
        // Add sign to queue.
        if (routename) {
            if (items.length > SIGN_MAX_QUEUE_SIZE) pop();
            push([routename, currentID]);
            setCurrentID(curr => curr + 1);
        }
    }, [routename]);

    return (
        <>
            <div className={"relative text-sm font-medium py-1 h-[28px] overflow-hidden"}>
                <div
                    className="cursor-pointer"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    onClick={handleOnClick}
                >
                    <div className={`absolute top-0 py-1 flex items-center duration-200 ${show ? "opacity-0" : ""}`}>
                        <h1>JORGE BECERRIL</h1>
                        <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
                    </div>

                    {renderSigns(
                        items.length > 0 ? items : [[routename ?? "about-me", 0]],
                        show,
                        currentRef
                    )}
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
                            ${
                                expanding
                                    ? "top-0 left-0"
                                    : `left-[25vw] ${isMobile ? "top-[calc((100vh-85vw-42px)/2)]" : "top-[calc((100vh-(50vw/1.7)-42px)/2)]"}`
                            }
                        `}
                        style={{
                            width: expanding ? "100vw" : `${currentRef.current?.getBoundingClientRect()?.width}px`,
                            height: expanding ? "100vh" : `${currentRef.current?.getBoundingClientRect()?.height}px`,
                            top: !expanding && isMobile ? "calc((100dvh - 85dvw - 42px) / 2)" : undefined,
                            backgroundColor: getColorFromRoutename(prev ?? routename ?? "about-me").hex,
                        }}
                    >
                        <h1>{getNameFromRoutename(prev ?? routename ?? "about-me")}</h1>
                        <BiRightArrowAlt
                            className="absolute top-1/2 left-1/2"
                            style={{
                                translate: `${((currentRef.current?.getBoundingClientRect()?.width ?? 0) - SIGN_ARROW_ICON_SIZE - 16) / 2}px -${SIGN_ARROW_ICON_SIZE / 2}px`,
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
