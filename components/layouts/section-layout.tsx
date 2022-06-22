
type Props = {
  children: any;
  id: string;
  dark?: boolean;
  container?: boolean;
  className?: any;
};

const SectionLayout = ({ id, dark, container, children, className }: Props) => {
  return (
    <section
      id={id}
      className={`${!dark ? "" : "bg-slate-800"} ${className ? className : ""}  py-12 min-h-screen grid place-content-center`}
    >
      <div
        className={`${
          container ? "container w-11/12 md:w-9/12 lg:w-4/12 mx-auto" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionLayout