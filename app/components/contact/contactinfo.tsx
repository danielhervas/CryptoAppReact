import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
      <p className="mb-2">Dirección: Calle Falsa 123, Ciudad, País</p>
      <p className="mb-2">Teléfono: +123 456 7890</p>
      <p className="mb-2">Correo Electrónico: contacto@criptomonedas.com</p>

      {/* Redes Sociales */}
      <div className="flex space-x-4 mt-4">
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

      {/* Mapa de Ubicación */}
      <div className="mt-8 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.1690784049273!2d-4.0241283626100435!3d39.871036152711575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0a53483a57e7%3A0xc7f7d4815179b44b!2sIES%20Azarquiel!5e0!3m2!1ses!2ses!4v1741459108972!5m2!1ses!2ses"
          width="600"
          height="200"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;