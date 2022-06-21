import { ButtonHTMLAttributes, ComponentProps, FC, HTMLProps, ReactNode, ReactPropTypes } from "react";

interface Props extends ComponentProps<"button">  {
  children: ReactNode | ReactNode[];
  props?: HTMLProps<HTMLButtonElement>;
};

const ButtonCta = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-yellow-400 py-2 px-4 rounded-md shadow-md text-gray-800 font-semibold text-lg"
    >
      {children}
    </button>
  );
};

export default ButtonCta;
