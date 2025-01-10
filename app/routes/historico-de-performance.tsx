import { BiRightArrowAlt } from "react-icons/bi";
import type { Route } from "./+types/home";
import Section from "~/projects/section";
import { SIGN_ARROW_ICON_SIZE } from "~/subway-lines/subway-line-sign/constants";
import MotionEnter from "~/projects/motion-enter";
import Details from "~/projects/details";
import MediaDescription from "~/projects/MediaDescription";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Jorge Becerril" },
    { name: "description", content: "My personal portfolio." },
  ];
}

const HistoricoDePerformance = () => {
  return (
    <>
        <Section id="historico-de-performance" aria-label="Title" className="text-white">
            <div className="w-fit flex items-center m-auto">
                <h1>HISTORICO DE PERFORMANCE</h1>
                <BiRightArrowAlt
                    className="motion-opacity-out-0 motion-translate-x-out-50"
                    size={SIGN_ARROW_ICON_SIZE}
                />
            </div>
        </Section>
        <Section id="overview" size="large" aria-label="Overview">
            <MotionEnter size="large">
                <MediaDescription src="historico-de-performance/historico-de-performance-overview-web.mp4" type="video">
                    Transformed talent management in Ternium with a web platform 
                    that <u>streamlines processes</u> and improves <u>data accuracy</u>.
                </MediaDescription>
            </MotionEnter>
        </Section>
        <Section id="client-needs" aria-label="Client Needs">
            <MotionEnter>
                <p>
                    The client needed a solution to modernize their HR 
                    processes, <u>reduce manual data entry</u>, and improve the <u>efficiency</u> and <u>accuracy</u> of 
                    employee information.
                </p>
            </MotionEnter>
        </Section>
        <Section id="search-and-filters" size="large" aria-label="Search and Filters">
            <MotionEnter size="large">
                <MediaDescription src="historico-de-performance/historico-de-performance-filters.mp4" type="video"/>
            </MotionEnter>
        </Section>
        <Section id="edit-and-delete" size="large" aria-label="Edit and Delete">
            <MotionEnter size="large">
                <MediaDescription src="historico-de-performance/historico-de-performance-edit.mp4" type="video"/>
            </MotionEnter>
        </Section>
        <Section id="download" size="large" aria-label="Download">
            <MotionEnter size="large">
                <MediaDescription src="historico-de-performance/historico-de-performance-download.mp4" type="video"/>
            </MotionEnter>
        </Section>
        <Section id="details" aria-label="Details">
            <MotionEnter size="large">
                <Details data={{
                    titles: ["Deliverables", "Technologies", "Team", "Client", "Date"],
                    content: [
                        ["Web Design", "Web Development", "Database Development"],
                        ["React", "Next.js", "Typescript", "Firebase Auth", "PostgreSQL", "MUI", "ReactPDF"],
                        ["Jorge Becerril", "Erick Siller", "Eduardo Loya", "Carlos Milano", "Oscar Soto", "Roberto Pérez"],
                        ["Ternium"],
                        ["March, 2023"],
                    ],
                }}/>
            </MotionEnter>
        </Section>
    </>
  );
}

export default HistoricoDePerformance;
