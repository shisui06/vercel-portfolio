import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-2xl rounded md:p-0 hover:text-lime-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;


