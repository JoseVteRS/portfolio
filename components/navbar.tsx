const NAVBAR_ITEMS = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#about",
  },
  {
    title: "Tecnologies",
    link: "#about",
  },
  {
    title: "Contact",
    link: "#about",
  },
];

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-slate-900 text-slate-50 uppercase text-sm tracking-wide p-4">
      <ul className="flex items-center justify-end gap-3">
        {NAVBAR_ITEMS.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
