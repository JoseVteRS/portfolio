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
    <div className="bg-slate-700 p-8 rounded shadow ">
      <div>
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 font-semibold text-2xl font-bold">
          {title}
        </h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      <div className="w-full my-2 rounded-xl overflow-hidden">
        <img className="w-full" src={imgSrc} alt="" />
      </div>
      <div className="bg-slate-600 p-4 rounded mt-8">
        <h4 className="text-white font-thin mt-4 mb-2">Tecnologies</h4>
        <ul className="grid grid-cols-2 gap-4">
          {tecnologies &&
            tecnologies.map((tecnology) => (
              <li className="bg-gray-800  rounded-sm p-1 text-white font-medium text-center">
                {tecnology.name}
              </li>
            ))}
        </ul>
      </div>

      <div className="flex items-center justify-end mt-8 gap-5">
        <a
          href={linkDemo}
          className="bg-yellow-400 border border-transparent py-2 px-4 inline-block font-semibold rounded"
        >
          Demo
        </a>
        <a
          href={linkCode}
          className="border-yellow-400 border py-2 px-4 inline-block text-white font-semibold rounded"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default CardProject;
