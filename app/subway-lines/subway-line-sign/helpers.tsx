import { BiRightArrowAlt } from "react-icons/bi";
import type { SubwaySign } from "./types";
import { SIGN_ARROW_ICON_SIZE, TAILWIND_BG_COLOR } from "./constants";

export const renderSigns = (signs: [SubwaySign, number][], showTop: boolean) => {
    return signs.map(([{ name, color }, id], index)=> {
        // All items but the top one have exited.
        const exited = index < signs.length - 1;
        
        return (
            <div
                className={`
                    absolute top-0 py-1
                    text-white
                    duration-200 ease-in-out
                    overflow-hidden
                    ${exited || !showTop ? "-translate-x-[101%]" : ""}
                    ${TAILWIND_BG_COLOR.get(color)}
                `}
                key={id}
            >
                {/* Determines the size of the sign container. */}
                <div className="flex">
                    <p className="invisible">{name}</p>
                    <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
                </div>
                {/* The text to be displayed. */}
                <div
                    className={`
                        absolute top-0 py-1
                        flex
                        duration-200 ease-in-out
                        ${exited || !showTop ? "translate-x-[101%]" : ""}
                    `}
                >
                    <h2>{name}</h2>
                    <BiRightArrowAlt size={SIGN_ARROW_ICON_SIZE}/>
                </div>
            </div>
        );
    });
};
