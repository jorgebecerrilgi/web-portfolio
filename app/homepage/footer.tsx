import { useState } from "react";
import { FOOTER_ICONS } from "./constants";
import { useTimeoutEffect } from "~/hooks";

const Footer = () => {
    const [show, setShow] = useState(false);

    useTimeoutEffect(() => setShow(true), 200);
    
    return (
        <footer className={`flex gap-4 items-end duration-200 ${show ? "" : "opacity-0"}`}>
            {
                FOOTER_ICONS.map(({ href, icon, "aria-label": ariaLabel }) => (
                    <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" key={href}>
                        {icon}
                    </a>
                ))
            }
        </footer>
    );
};

export default Footer;
