import React from 'react';
import Logo from "../../../../public/v2logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-4 pb-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Redes sociales */}
       

        <div className="text-white text-xl font-bold flex-shrink-0 w-36 px-4">
        <img src={Logo} alt="LogoCryptobrosV2" />
      </div>

        {/* Políticas */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="#" className="text-white hover:text-gray-400">Política de Privacidad</a>
          <a href="#" className="text-white hover:text-gray-400">Política de Cookies</a>
          <a href="#" className="text-white hover:text-gray-400">Términos y Condiciones</a>
        </div>

        <div className="flex space-x-4 mb-4 sm:mb-0 pe-5 ps-5">
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;