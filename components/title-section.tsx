import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  subtitle: string;
  dark?: boolean;
};

const TitleHeader = ({ children, dark = false, subtitle }: Props) => {
  return (
    <div className="mb-12">
      {dark ? (
        <>
          <h1 className="-tracking-wide font-extrabold text-transparent p-4 text-6xl bg-clip-text bg-gradient-to-r from-green-600 to-purple-700 text-center">
            {children}
          </h1>
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black text-2xl font-semibold text-center">
            {subtitle}
          </p>
        </>
      ) : (
        <>
          <h1 className="-tracking-wide font-extrabold text-transparent p-4 text-6xl bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 text-center">
            {children}
          </h1>
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-2xl font-semibold text-center">
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
};

export default TitleHeader;
