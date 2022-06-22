
import Link from 'next/link';

type Props = {}

const BUTTON_KIND: {[key: string]: any} = {
  primary: {
    styles:
      "bg-yellow-500 hover:bg-yellow-600  border border-transparent text-gray-800 py-2 px-4 font-semibold rounded flex items-center gap-2",
  },
  secondary: {
    styles:
      "border-yellow-400 hover:bg-yellow-100 hover:bg-opacity-5 border py-2 px-4 text-white font-semibold rounded flex items-center gap-2",
  },
};

const ButtonLink = ({children, link, icon: Icon, kind = 'primary', classNamesIcon}: any) => {
  return (
    <Link href={link}>
      <a className={ BUTTON_KIND[kind].styles }>
        <Icon className={classNamesIcon} />
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink