import { BiRightArrowAlt } from "react-icons/bi";
import { SIGN_ARROW_ICON_SIZE } from "./constants";
import { getColorFromRoutename, getNameFromRoutename } from "~/helpers";

export const renderSigns = (signs: [Routename, number][], showCurrent: boolean, ref: React.RefObject<HTMLDivElement | null>) => {
    return signs.map(([routename, id], index, filteredSigns)=> {
        const name = getNameFromRoutename(routename);
        const color = getColorFromRoutename(routename);
        
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
                `}
                style={{ backgroundColor: color.hex }}
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
