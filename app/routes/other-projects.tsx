import { BiRightArrowAlt } from "react-icons/bi";
import type { Route } from "./+types/home";
import Section from "~/projects/section";
import { SIGN_ARROW_ICON_SIZE } from "~/subway-lines/subway-line-sign/constants";
import MotionEnter from "~/projects/motion-enter";
import Details from "~/projects/details";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Jorge Becerril" },
    { name: "description", content: "My personal portfolio." },
  ];
}

const OtherProjects = () => {
  return (
    <>
        <Section id="other-projects" aria-label="Title" className="text-white">
            <div className="w-fit flex items-center m-auto">
                <h1>OTHER PROJECTS</h1>
                <BiRightArrowAlt
                    className="motion-opacity-out-0 motion-translate-x-out-50"
                    size={SIGN_ARROW_ICON_SIZE}
                />
            </div>
        </Section>
        <Section id="versebot-hotel" size="large" aria-label="Versebot Hotel">
            <MotionEnter size="large">
                <div className="flex items-end gap-6">
                    <p className="max-w-[18%] text-end leading-tight">
                        Versebot: Hotel is a multiplayer experience created in <u>Unreal Engine for Fortnite</u>, with 
                        original 3D models and <u>scripting</u> in the Verse programming language.
                    </p>
                    <div>
                        <video src="other-projects/other-projects-versebot-hotel.mp4" autoPlay loop muted></video>
                    </div>
                </div>
            </MotionEnter>
        </Section>
        <Section id="you-shall-pass" size="large" aria-label="You Shall Pass">
            <MotionEnter size="large">
                <div className="flex items-end gap-6">
                    <div>
                        <img src="other-projects/other-projects-you-shall-pass.png"/>
                    </div>
                    <p className="max-w-[18%] leading-tight">
                        You Shall Pass is a singleplayer game made in <u>Unity</u>, which keeps track of player's 
                        highscores in an <u>SQL database</u>.
                    </p>
                </div>
            </MotionEnter>
        </Section>
        <Section id="credits" aria-label="Credits">
            <MotionEnter>
                <Details data={{
                    titles: ["Versebot: Hotel", "You Shall Pass"],
                    content: [
                        ["Jorge Becerril"],
                        ["Jorge Becerril", "Eric Oyervides", "Diego Piñones", "Eduardo Loya", "Roberto Pérez"],
                    ],
                }}/>
            </MotionEnter>
        </Section>
    </>
  );
}

export default OtherProjects;
