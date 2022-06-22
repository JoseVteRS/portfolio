import React from "react";
import BadgeWithIcon from "./badge-with-icon";
import JavascriptIcon from "./icons/tecnologies/javascript-icon";
import MongoIcon from "./icons/tecnologies/mongo-icon";
import NextJSIcon from "./icons/tecnologies/nextjs-icon";
import NodeIcon from "./icons/tecnologies/node-icon";
import ReactIcon from "./icons/tecnologies/react-icon";
import TailwindcssIcon from "./icons/tecnologies/tailwindcss-icon";
import TypescriptIcon from "./icons/tecnologies/typescript-icon";

type Props = {};

const BannerTecnologies = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-around container w-2/3 mx-auto">
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <div className="absolute top-2 left-2 h-2 w-2 bg-green-600 rounded-full"></div>
        <BadgeWithIcon
          icon={JavascriptIcon}
          color="fill-yellow-400"
          size="h-12 w-12"
        />
        <span className="text-slate-300 font-thin text-xs inline-block">
          4 years
        </span>
      </div>

      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <div className="absolute top-2 left-2 h-2 w-2 bg-yellow-600 rounded-full"></div>
        <BadgeWithIcon
          icon={TypescriptIcon}
          color="fill-blue-600"
          size="h-12 w-12"
        />
        <span className="text-slate-300 font-thin text-xs inline-block">
          2 years
        </span>
      </div>

      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <div className="absolute top-2 left-2 h-2 w-2 bg-yellow-400 rounded-full"></div>
        <BadgeWithIcon
          icon={ReactIcon}
          color="fill-cyan-400"
          size="h-12 w-12"
        />
        <span className="text-slate-300 font-thin text-xs inline-block">
          2 years
        </span>
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <div className="absolute top-2 left-2 h-2 w-2 bg-yellow-400 rounded-full"></div>
        <BadgeWithIcon icon={NextJSIcon} color="fill-white" size="h-12 w-12" />
        <span className="text-slate-300 font-thin text-xs inline-block">
          2 years
        </span>
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <div className="absolute top-2 left-2 h-2 w-2 bg-orange-700 rounded-full"></div>
        <BadgeWithIcon
          icon={NodeIcon}
          color="fill-yellow-400"
          size="h-12 w-12"
        />
        <span className="text-slate-300 font-thin text-xs inline-block">
          3 years
        </span>
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <div className="absolute top-2 left-2 h-2 w-2 bg-green-600 rounded-full"></div>
        <BadgeWithIcon
          icon={TailwindcssIcon}
          color="fill-white"
          size="h-12 w-12"
        />
        <span className="text-slate-300 font-thin text-xs inline-block">
          1 years
        </span>
      </div>
    </div>
  );
};

export default BannerTecnologies;
