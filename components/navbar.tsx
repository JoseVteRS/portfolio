import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
const NAVBAR_ITEMS = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Tecnologies",
    link: "#stack",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

type Props = {};

const Navbar = (props: Props) => {
    const router = useRouter();

    const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      router.push(router.route, router.asPath, {
        locale: value,
      });
    };

  return (
    <nav className="w-full bg-slate-900 bg-opacity-80 text-slate-50 uppercase text-sm tracking-wide py-8 px-4 sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto md:flex items-center justify-between gap-8">
        <ul className="flex items-center  gap-3">
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <select
          onChange={handleLocaleChange}
          value={router.locale}
          className="rounded w-32 py-1 text-white bg-transparent"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
