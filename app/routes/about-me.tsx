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
        <section id="jorge-becerril" className="min-h-[100vh] m-auto text-white content-center" aria-label="title">
            <div className="w-fit flex items-center m-auto">
                <h1 className="">JORGE BECERRIL</h1>
                <BiRightArrowAlt className="motion-opacity-out-0 motion-translate-x-out-50" size={SIGN_ARROW_ICON_SIZE}/>
            </div>
        </section>
        <section id="about-me" className="min-h-[100vh] max-w-[720px] m-auto px-[64px] content-center" aria-label="about me">
            <div className="intersect-once intersect:motion-preset-slide-up motion-delay-200">
                <p>
                    Software engineer with a passion for <u>front-end development</u> and user experience. Experienced in 
                    building scalable web and mobile applications using React, React Native, Next.js, and 
                    TypeScript.
                </p>
                <br />
                <p>
                    Had the privilege of working <u>Lyft</u>, where I contributed to internal tools and workflow 
                    optimization during my internship.
                </p>
                <br />
                <p>
                    Graduated from <u>Tecnológico de Monterrey</u> with a Bachelor's degree in Computer Science in 
                    December, 2024.
                </p>
            </div>
        </section>
        <section id="experience" className="min-h-[100vh] max-w-[720px] m-auto px-[64px] content-center" aria-label="experience">
            <div className="intersect-once intersect:motion-preset-slide-up motion-delay-200">
                <p>
                    Software engineer with a passion for <u>front-end development</u> and user experience. Experienced in 
                    building scalable web and mobile applications using React, React Native, Next.js, and 
                    TypeScript.
                </p>
                <br />
                <p>
                    Had the privilege of working <u>Lyft</u>, where I contributed to internal tools and workflow 
                    optimization during my internship.
                </p>
                <br />
                <p>
                    Graduated from <u>Tecnológico de Monterrey</u> with a Bachelor's degree in Computer Science in 
                    December, 2024.
                </p>
            </div>
        </section>
        <section id="contact-me" className="min-h-[100vh] max-w-[720px] m-auto px-[64px] content-center" aria-label="contact me">
            <div className="intersect-once intersect:motion-preset-slide-up motion-delay-200">
                <p>jorgebecerrilgm@gmail.com</p>
            </div>
        </section>
    </>
  );
}

export default AboutMe;
