import React from 'react';
import FormField from './formfield';

const FormFields: React.FC = () => {
  return (
    <>
      <FormField label="Nombre" type="text" name="name" placeholder="Tu nombre" />
      <FormField label="Email" type="email" name="email" placeholder="Tu email" />
      <FormField label="Asunto" type="text" name="subject" placeholder="Asunto" />
      <FormField label="Mensaje" type="textarea" name="message" placeholder="Tu mensaje" />
    </>
  );
};

export default FormFields;