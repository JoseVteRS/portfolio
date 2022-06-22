
type Props = {
  children: any;
  id: string;
  dark?: boolean;
  container?: boolean;
};

const SectionLayout = ({ id, dark, container, children }: Props) => {
  return (
    <section
      id={id}
      className={`${!dark ? "bg-slate-200" : "bg-slate-800"}  py-12 `}
    >
      <div className={`${container ? "container w-11/12 md:w-9/12 lg:w-8/12 mx-auto" : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout