import { Link } from "react-router";

type NavItemProps = {
  name: string;
  href: string;
};

const InfoItem: React.FC<NavItemProps> = ({ name, href }) => (
  <li>
    <Link
      to={href}
      className="text-white transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 list-none"
    >
      {name}
    </Link>
  </li>
);

export default InfoItem;