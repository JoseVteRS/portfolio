import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  subtitle: string;
};

const TitleHeader = ({children,  subtitle }: Props) => {
  return (
    <div className="my-8">
      <h1 className="font-extrabold text-transparent p-4 text-6xl bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 text-center">
        {children}
      </h1>
      <p className=" text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-2xl font-bold text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default TitleHeader;
