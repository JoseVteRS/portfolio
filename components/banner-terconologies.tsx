import React from "react";
import BadgeWithIcon from "./badge-with-icon";
import JavascriptIcon from "./icons/tecnologies/javascript-icon";
import MongoIcon from "./icons/tecnologies/mongo-icon";
import NextJSIcon from "./icons/tecnologies/nextjs-icon";
import NodeIcon from "./icons/tecnologies/node-icon";
import ReactIcon from "./icons/tecnologies/react-icon";
import TailwindcssIcon from "./icons/tecnologies/tailwindcss-icon";
import TypescriptIcon from "./icons/tecnologies/typescript-icon";


const BannerTecnologies = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-around container w-2/3 mx-auto relative">


      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <BadgeWithIcon
          icon={JavascriptIcon}
          color="fill-yellow-400"
          size="h-12 w-12"
        />
      </div>

      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <BadgeWithIcon
          icon={TypescriptIcon}
          color="fill-blue-600"
          size="h-12 w-12"
        />
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <BadgeWithIcon
          icon={ReactIcon}
          color="fill-cyan-400"
          size="h-12 w-12"
        />
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <BadgeWithIcon icon={NextJSIcon} color="fill-white" size="h-12 w-12" />
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <BadgeWithIcon
          icon={NodeIcon}
          color="fill-yellow-400"
          size="h-12 w-12"
        />
      </div>
      <div className="text-center bg-slate-900 p-4 rounded-xl shadow-xl relative">
        <BadgeWithIcon
          icon={TailwindcssIcon}
          color="fill-white"
          size="h-12 w-12"
        />
      </div>
    </div>
  );
};

export default BannerTecnologies;
