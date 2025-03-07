import Navbar from "./Navbar";
import Logo from "../../../../public/v2logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-3 px-4 flex items-center justify-between">
      <div className="text-white text-xl font-bold flex-shrink-0 w-36 px-4">
        <img src={Logo} alt="LogoCryptobrosV2" />
      </div>
      <div className="flex-1 flex justify-end items-center pe-5"> 
        <Navbar />
      </div>
    </header>
  );
};

export default Header;