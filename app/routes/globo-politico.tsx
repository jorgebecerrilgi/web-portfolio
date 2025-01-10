import { BiRightArrowAlt } from "react-icons/bi";
import type { Route } from "./+types/home";
import Section from "~/projects/section";
import { SIGN_ARROW_ICON_SIZE } from "~/subway-lines/subway-line-sign/constants";
import MotionEnter from "~/projects/motion-enter";
import Experience from "~/projects/experience";
import Details from "~/projects/details";
import MediaDescription from "~/projects/MediaDescription";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Jorge Becerril" },
    { name: "description", content: "My personal portfolio." },
  ];
}

const GloboPolitico = () => {
  return (
    <>
        <Section id="globo-politico" aria-label="Title" className="text-white">
            <div className="w-fit flex items-center m-auto">
                <h1>GLOBO POLITICO</h1>
                <BiRightArrowAlt
                    className="motion-opacity-out-0 motion-translate-x-out-50"
                    size={SIGN_ARROW_ICON_SIZE}
                />
            </div>
        </Section>
        <Section id="overview" size="large" aria-label="Overview">
            <MotionEnter size="large">
                <MediaDescription src="globo-politico/globo-politico-overview-web.mp4" type="video">
                    <u>Globo Político</u> is a blog focused on Mexican politics, offering thoughtful articles on 
                    relevant topics.
                </MediaDescription>
            </MotionEnter>
        </Section>
        <Section id="client-needs" aria-label="Client Needs">
            <MotionEnter>
                <p className="mb-4">
                    The client was looking for a redesign that would convey its <u>unique brand identity</u> and 
                    communicate the blog's vision with clarity.
                </p>
                <p>
                    They specified they wanted to encourage as many readers as possible 
                    to <u>share their thoughts</u> and <u>reach out</u>.
                </p>
            </MotionEnter>
        </Section>
        <Section id="mobile" aria-label="Mobile">
            <MotionEnter size="large">
                <div className="flex items-end gap-[32px] justify-center">
                    <div>
                        <video className="max-h-[75vh]" src="globo-politico/globo-politico-overview-mobile.mp4" autoPlay loop muted></video>
                    </div>
                    <p className="max-w-[25%] leading-tight">
                        A <u>strong presentation</u> for the latest post, specially in <u>mobile</u>, was a shared goal by the 
                        client.
                    </p>
                </div>
            </MotionEnter>
        </Section>
        <Section id="details" aria-label="Details">
            <MotionEnter size="large">
                <Details data={{
                    titles: ["Deliverables", "Technologies", "Client", "Date"],
                    content: [
                        ["Brand Identity", "Web Design", "Web Development", "Database Development"],
                        ["React", "Next.js", "Typescript", "Firebase", "Firebase Storage"],
                        ["Rafael Hernández"],
                        ["December, 2022"],
                    ],
                }}/>
            </MotionEnter>
        </Section>
    </>
  );
}

export default GloboPolitico;
