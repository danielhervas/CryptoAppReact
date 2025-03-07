import { Link } from "react-router";
import NavItem from "./NavItem";

type NavItemProps = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  return (
    <nav className="flex space-x-4 m-0 p-0">
      <ul className="flex space-x-6 text-xl pe-6">
        <NavItem name="Home" href="/" />
        <NavItem name="Noticias" href="/noticias" />
        <NavItem name="Contacto" href="/about" />
      </ul>
    </nav>
  );
};

export default Navbar;