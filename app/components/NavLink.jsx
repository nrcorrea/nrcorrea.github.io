import Link from 'next/link';

const NavLink = ({href, title}) => (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#116466] sm:text-xl rounded md:p-0 hover:text-[#D9B08C]">
        {title}
    </Link>
    );
export default NavLink;