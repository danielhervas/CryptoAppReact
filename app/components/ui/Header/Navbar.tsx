import { Link } from "react-router";

import NavItem from "./NavItem";
type NavItemProps = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  return (
    <nav className="text-black p-4">
      <ul className="flex space-x-4">
        <NavItem name="Home" href="/" />
        <NavItem name="Noticias" href="/noticias" />
        <NavItem name="Contacto" href="/about" />
      </ul>
    </nav>
  );
};

export default Navbar;