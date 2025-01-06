import Homepage from "~/homepage";
import type { Route } from "./+types/home";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Jorge Becerril" },
    { name: "description", content: "My personal portfolio." },
  ];
}

const Home = () => {
  return (
    <div className="w-1/2 aspect-[10/17] sm:aspect-[17/10]">
      <Homepage/>
    </div>
  );
}

export default Home;
