import Navbar from "./Navbar";
import Logo from "../../../../public/v2logo.png";
const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between">
      <div className="text-white text-xl font-bold w-36"><img src={Logo} alt="LogoCryptobrosV2" /></div>
      <Navbar />
    </header>
  );
};

export default Header;
