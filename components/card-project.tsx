import { ReactComponentElement, ReactElement, ReactNode } from "react";
import BadgeWithIcon from "./badge-with-icon";
import JavascriptIcon from "./icons/tecnologies/javascript-icon";
import MongoIcon from "./icons/tecnologies/mongo-icon";
import NextJSIcon from "./icons/tecnologies/nextjs-icon";
import NodeIcon from "./icons/tecnologies/node-icon";
import ReactIcon from "./icons/tecnologies/react-icon";
import TypescriptIcon from "./icons/tecnologies/typescript-icon";

type TechIcon = {[key: string]: any}

const TECH_ICONS: TechIcon = {
  node: { icon: NodeIcon, color: "fill-green-500" },
  next: { icon: NextJSIcon, color: "fill-white" },
  react: { icon: ReactIcon, color: "fill-cyan-500" },
  typescript: { icon: TypescriptIcon, color: "fill-blue-500" },
  javascript: { icon: JavascriptIcon, color: "fill-yellow-500" },
  mongo: { icon: MongoIcon, color: "fill-green-500" },
};
interface Tecnology {
  name: string;
}

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  tecnologies: Tecnology[];
  linkDemo: string;
  linkCode: string;
};

const CardProject = ({
  title,
  description,
  imgSrc,
  tecnologies,
  linkDemo,
  linkCode,
}: Props) => {
  return (
    <div className="bg-slate-900 p-8 rounded shadow ">
      <div>
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 font-bold text-2xl">
          {title}
        </h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      <div className="w-full my-2 rounded-xl overflow-hidden">
        <img className="w-full" src={imgSrc} alt="" />
      </div>
      <div className="">
        <h4 className="text-white text-xl mt-8  font-semibold">Tecnologies</h4>
        
        <ul className="flex flex-wrap gap-4">
          {tecnologies &&
            tecnologies.map((tecnology: Tecnology) => (
              <li key={tecnology.name}>
                <BadgeWithIcon
                  icon={TECH_ICONS[tecnology.name].icon}
                  color={TECH_ICONS[tecnology.name].color}
                  size="h-8 w-8"
                />
              </li>
            ))}
        </ul>
      </div>

      <div className="flex items-center justify-end mt-8 gap-5">
        <a
          href={linkDemo}
          className="bg-yellow-400 hover:bg-yellow-600 border border-transparent py-2 px-4 inline-block font-semibold rounded"
        >
          Demo
        </a>
        <a
          href={linkCode}
          className="border-yellow-400 hover:bg-yellow-100 hover:bg-opacity-5 0 border py-2 px-4 inline-block text-white font-semibold rounded"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default CardProject;
