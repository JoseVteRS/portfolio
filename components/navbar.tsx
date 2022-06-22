import Link from "next/link";

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
  return (
    <nav className="w-full bg-slate-900 text-slate-50 uppercase text-sm tracking-wide p-4">
      <ul className="flex items-center justify-end gap-3">
        {NAVBAR_ITEMS.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
