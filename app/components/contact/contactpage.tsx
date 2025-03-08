import React from 'react';
import ContactForm from './contactform';
import ContactInfo from './contactinfo';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-white"> {/* Ajuste de color de texto */}
      <h2 className="text-3xl font-bold text-center mb-4">Contáctanos</h2>
      <p className="text-center mb-8">Rellena el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario de Contacto */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg"> {/* Ajuste de fondo y separación */}
          <ContactForm />
        </div>

        {/* Información de Contacto */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg"> {/* Ajuste de fondo y separación */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;