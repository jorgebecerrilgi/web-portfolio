import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <a href="mailto:jorgebecerrilgm@gmail.com" aria-label="email"><MdEmail/></a>
            <a href="https://www.linkedin.com/in/jorgebecerril" aria-label="linkedin"><FaLinkedinIn/></a>
            <a href="https://www.github.com/jorgebecerrilgi" aria-label="github"><FaGithub size={15}/></a>
        </>
    );
};

export default Footer;
