import React from "react";
import BadgeWithIcon from "./badge-with-icon";
import JavascriptIcon from "./icons/tecnologies/javascript-icon";
import MongoIcon from "./icons/tecnologies/mongo-icon";
import NextJSIcon from "./icons/tecnologies/nextjs-icon";
import NodeIcon from "./icons/tecnologies/node-icon";
import ReactIcon from "./icons/tecnologies/react-icon";
import TypescriptIcon from "./icons/tecnologies/typescript-icon";

type Props = {};

const BannerTecnologies = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-5 justify-around container w-2/3 mx-auto">
      <BadgeWithIcon icon={JavascriptIcon} color="fill-yellow-400" size="h-12 w-12" />
      <BadgeWithIcon icon={TypescriptIcon} color="fill-blue-600" size="h-12 w-12" />
      <BadgeWithIcon icon={ReactIcon} color="fill-cyan-400" size="h-12 w-12" />
      <BadgeWithIcon icon={NextJSIcon} color="fill-white" size="h-12 w-12" />
      <BadgeWithIcon icon={NodeIcon} color="fill-yellow-400" size="h-12 w-12" />
    </div>
  );
};

export default BannerTecnologies;
