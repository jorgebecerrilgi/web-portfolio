import { FOOTER_LINKS } from "./constants";

const Footer = () => {
    return (
        <div className="flex gap-2 items-end">
            {
                FOOTER_LINKS.map(({ href, icon, "aria-label": ariaLabel }) => (
                    <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
                        {icon}
                    </a>
                ))
            }
        </div>
    );
};

export default Footer;
