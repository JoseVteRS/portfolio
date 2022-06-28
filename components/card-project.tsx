import Img from "next/image";
import {motion} from 'framer-motion';
import BadgeWithIcon from "./badge-with-icon";
import ButtonLink from "./button-link";
import GithubCodespacesIcon from "./icons/codespaces-icon";
import ExternalLinkIcon from "./icons/external-link-icon";
import GithubIcon from "./icons/github-icon";
import JavascriptIcon from "./icons/tecnologies/javascript-icon";
import MongoIcon from "./icons/tecnologies/mongo-icon";
import NextJSIcon from "./icons/tecnologies/nextjs-icon";
import NodeIcon from "./icons/tecnologies/node-icon";
import ReactIcon from "./icons/tecnologies/react-icon";
import TypescriptIcon from "./icons/tecnologies/typescript-icon";
import { useEffect, useState } from "react";
import ImageSkeleton from "./image-skeleton";
import { fetchUrl } from "../utils/api/fetch-url";
import { useUrl } from "../utils/hooks/use-url";

type TechIcon = { [key: string]: any };

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
  linkCodespace: string;
  index: number
};

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

const CardProject = ({
  title,
  description,
  imgSrc,
  tecnologies,
  linkDemo,
  linkCodespace,
  linkCode,
  index
}: Props) => {

  const {img, imgError, imgLoading} = useUrl(linkDemo);

  return (
    <motion.div
      custom={{ delay: (index + 1) * 0.1 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={title}
    >
      <div className="bg-slate-900 bg-opacity-40 p-8 rounded-xl">
        <div>
          <h3 className="font-title text-transparent bg-clip-text  bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 font-bold text-3xl">
            {title}
          </h3>
          <p className="font-text text-slate-300 text-md">{description}</p>
        </div>
        <div className="overflow-hidden rounded-xl mt-8">
          {imgLoading ? (
            <ImageSkeleton />
          ) : (
            <Img
              src={img ?? "/project-default-image.png"}
              alt=""
              width={450}
              height={300}
            />
          )}
        </div>

        <div className="">
          <h4 className="text-white text-lg mt-8 mb-2 font-semibold ">
            Tecnologies
          </h4>

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

        <div className="flex flex-wrap items-center justify-end mt-16 gap-5">
          <ButtonLink
            link={linkDemo}
            icon={ExternalLinkIcon}
            classNamesIcon="h-6 w-6"
          >
            Demo
          </ButtonLink>
          <ButtonLink
            link={linkCode}
            icon={GithubIcon}
            kind="secondary"
            classNamesIcon="h-5 w-5 fill-slate-200"
          >
            Code
          </ButtonLink>
          <ButtonLink
            link={linkCodespace}
            icon={GithubCodespacesIcon}
            kind="secondary"
            classNamesIcon="h-5 w-5 fill-slate-200 flex"
          >
            Codespaces
          </ButtonLink>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProject;
