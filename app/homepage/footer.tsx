import { FOOTER_ICONS } from "./constants";

const Footer = () => {
    return (
        <footer className="flex gap-2 items-end">
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
