import Homepage from "~/homepage";
import type { Route } from "./+types/home";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Jorge Becerril" },
    { name: "description", content: "My personal portfolio." },
  ];
}

const AboutMe = () => {
  return (
    <div className="w-full bg-neutral-950">
        {/* Back to Homepage */}
        <nav className="fixed right-0 p-[64px] text-end text-white" aria-label="Main">
            <a href="/" aria-label="Back to homepage">
                <div className="w-[16px] h-[2px] bg-white translate-y-[8.5px] rotate-45"></div>
                <div className="w-[2px] h-[16px] bg-white translate-x-[7px] rotate-45"></div>
            </a>
        </nav>
        {/* In this page */}
        <div className="fixed h-full w-[144px] content-center">
            <div className="w-full max-h-[400px] flex justify-center">
                {/* Line */}
                <div className="w-[16px] justify-items-center translate-x-full">
                    <div className="w-[2px] h-[400px] bg-white"></div>
                </div>
                {/* Section Names */}
                <nav className="w-0 text-white text-xxs" aria-label="On this page">
                    <ol className="h-[400px] text-nowrap flex flex-col justify-between translate-x-[32px]">
                        <li className="-rotate-[0.25rad]">
                            <a href="#jorge-becerril" aria-current="step">JORGE BECERRIL</a>
                        </li>
                        <li className="-rotate-[0.25rad]">
                            <a href="#experience">EXPERIENCE</a>
                        </li>
                        <li className="-rotate-[0.25rad]">
                            <a href="#contact-me">CONTACT ME</a>
                        </li>
                    </ol>
                </nav>
                {/* Stations */}
                <div className="w-[16px] h-[400px] flex flex-col justify-between z-0">
                    <div className="w-[16px] h-[16px] bg-neutral-950 rounded-full border-4 border-solid border-white"></div>
                    <div className="w-[16px] h-[16px] bg-neutral-950 rounded-full border-4 border-solid border-white"></div>
                    <div className="w-[16px] h-[16px] bg-neutral-950 rounded-full border-4 border-solid border-white"></div>
                </div>
                {/* Wagon */}
                <div className="w-[16px] -translate-x-full">
                    <div className="h-[32px] bg-white"></div>
                </div>
            </div>
        </div>
        {/* Content */}
        <main className="mx-[176px] text-sm">
            <div className="max-w-[960px] m-auto  justify-items-center">
                <section className="min-h-[100vh] text-white content-center" aria-label="title">
                    <h1 className="-translate-x-[8px]">JORGE BECERRIL</h1>
                </section>
                <section className="min-h-[100vh] max-w-[720px] px-[64px] text-white content-center" aria-label="experience">
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
            </div>
        </main>
    </div>
  );
}

export default AboutMe;
