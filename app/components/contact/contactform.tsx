import React from 'react';
import FormFields from './formfields';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envío del formulario
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormFields />
      <div className="text-center">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;