import { BiRightArrowAlt } from "react-icons/bi";
import type { SubwaySign } from "./types";
import { SIGN_ARROW_ICON_SIZE, TAILWIND_BG_COLOR } from "./constants";

export const renderSigns = (signs: [SubwaySign, number][], showCurrent: boolean, ref: React.RefObject<HTMLDivElement | null>) => {
    return signs.map(([sign, id], index, filteredSigns)=> {
        const { name, color } = sign;
        
        // Whether this is currently the sign at the front.
        const isCurrent = index === filteredSigns.length - 1;
        // Whether the sign should be hidden.
        const hidden = !isCurrent || !showCurrent;
        
        return (
            <div
                className={`
                    absolute
                    top-0 py-1
                    text-white
                    duration-200 ease-in-out
                    overflow-hidden
                    ${hidden ? "-translate-x-[101%]" : ""}
                    ${TAILWIND_BG_COLOR.get(color)}
                `}
                ref={isCurrent ? ref : undefined}
                key={id}
            >
                {/* Determines the size of the sign container. */}
                <div className="flex">
                    <p className="invisible">{name}</p>
                    <BiRightArrowAlt className="invisible" size={SIGN_ARROW_ICON_SIZE}/>
                </div>

                {/* The text to be displayed. */}
                <div
                    className={`
                        absolute top-0 py-1
                        flex items-center
                        duration-200 ease-in-out
                        ${hidden ? "translate-x-[101%]" : ""}
                    `}
                >
                    <h2>{name}</h2>
                    <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
                </div>
            </div>
        );
    });
};
