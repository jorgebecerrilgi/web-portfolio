import { BiRightArrowAlt } from "react-icons/bi";
import Section from "~/projects/section";
import { SIGN_ARROW_ICON_SIZE } from "~/subway-lines/subway-line-sign/constants";
import MotionEnter from "~/projects/motion-enter";
import Experience from "~/projects/experience";

const AboutMe = () => {
  return (
    <>
        <Section id="jorge-becerril" aria-label="Title" className="text-white">
            <div className="w-fit flex items-center m-auto -translate-y-[5vh] sm:translate-y-0">
                <h1>JORGE BECERRIL</h1>
                <BiRightArrowAlt
                    className="motion-opacity-out-0 motion-translate-x-out-50"
                    size={SIGN_ARROW_ICON_SIZE}
                />
            </div>
        </Section>
        <Section id="about-me" aria-label="About Me">
            <MotionEnter>
                <p className="mb-4">
                    Software engineer with a passion for <u>front-end development</u> and user experience. Experienced in 
                    building scalable web and mobile applications using React, React Native, Next.js, and 
                    TypeScript.
                </p>
                <p className="mb-4">
                    Had the privilege of working <u>Lyft</u>, where I contributed to internal tools and workflow 
                    optimization during my internship.
                </p>
                <p>
                    Graduated from <u>Tecnológico de Monterrey</u> with a Bachelor's degree in Computer Science in 
                    December, 2024.
                </p>
            </MotionEnter>
        </Section>
        <Section id="experience" aria-label="Experience">
            <MotionEnter>
                <Experience title="Front-end intern" company="Lyft" date="June 2024 - Sep 2024" location="Mexico City">
                    <p className="text-end mb-4">
                        <u>Automated</u> the deprecation of internal services by <u>30%</u>, and contributed to Lyft's 
                        open-source web UI and API platform, Clutch.
                    </p>
                    <p className="text-end text-gray-400">
                        React, Typescript, Jest, Storybook, Clutch.
                    </p>
                </Experience>
                <Experience title="Front-end intern" company="Lyft" date="Sep 2023 - Nov 2023" location="Mexico City">
                    <p className="text-end mb-4">
                        <u>Developed</u> an internal platform to streamline regulatory compliance.
                    </p>
                    <p className="text-end text-gray-400">
                        React, Next.js, Typescript, Jest, Bubble, SWR, react-hookz/web.
                    </p>
                </Experience>
            </MotionEnter>
        </Section>
        <Section id="contact-me" aria-label="Contact Me">
            <MotionEnter>
                <p className="text-center">jorgebecerrilgm@gmail.com</p>
            </MotionEnter>
        </Section>
    </>
  );
}

export default AboutMe;
