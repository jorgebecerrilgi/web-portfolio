import { BiRightArrowAlt } from "react-icons/bi";
import type { Route } from "./+types/home";
import { SIGN_ARROW_ICON_SIZE } from "~/subway-lines/subway-line-sign/constants";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Jorge Becerril" },
    { name: "description", content: "My personal portfolio." },
  ];
}

const AboutMe = () => {
  return (
    <>
        <section id="jorge-becerril" className="min-h-[100vh] text-white content-center" aria-label="title">
            <div className="flex items-center">
                <h1 className="">JORGE BECERRIL</h1>
                <BiRightArrowAlt className="motion-opacity-out-0 motion-translate-x-out-50" size={SIGN_ARROW_ICON_SIZE}/>
            </div>
        </section>
        <section id="experience" className="min-h-[100vh] max-w-[720px] px-[64px] content-center" aria-label="experience">
            <p>
                Software engineer with a passion for front-end development and user experience. Experienced in 
                building scalable web and mobile applications using React, React Native, Next.js, and 
                TypeScript.
            </p>
            <br />
            <p>
                Had the privilege of working Lyft, where I contributed to internal tools and workflow 
                optimization during my internship.
            </p>
            <br />
            <p>
                Graduated from Tecnológico de Monterrey with a Bachelor's degree in Computer Science in 
                December, 2024.
            </p>
        </section>
        <section id="contact-me" className="min-h-[100vh] max-w-[720px] px-[64px] content-center" aria-label="contact me">
            <p>
                Software engineer with a passion for front-end development and user experience. Experienced in 
                building scalable web and mobile applications using React, React Native, Next.js, and 
                TypeScript.
            </p>
            <br />
            <p>
                Had the privilege of working Lyft, where I contributed to internal tools and workflow 
                optimization during my internship.
            </p>
            <br />
            <p>
                Graduated from Tecnológico de Monterrey with a Bachelor's degree in Computer Science in 
                December, 2024.
            </p>
        </section>
    </>
  );
}

export default AboutMe;
