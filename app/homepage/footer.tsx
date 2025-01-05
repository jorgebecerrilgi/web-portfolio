import { FOOTER_LINKS } from "./constants";

const Footer = () => {
    return (
        <footer className="flex gap-2 items-end">
            {
                FOOTER_LINKS.map(({ href, icon, "aria-label": ariaLabel }) => (
                    <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
                        {icon}
                    </a>
                ))
            }
        </footer>
    );
};

export default Footer;
