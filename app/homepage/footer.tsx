import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="flex gap-2 items-end">
            <a href="mailto:jorgebecerrilgm@gmail.com" aria-label="email"><MdEmail size={14}/></a>
            <a href="https://www.linkedin.com/in/jorgebecerril" aria-label="linkedin"><FaLinkedinIn size={14}/></a>
            <a href="https://www.github.com/jorgebecerrilgi" aria-label="github"><FaGithub size={13}/></a>
        </div>
    );
};

export default Footer;
