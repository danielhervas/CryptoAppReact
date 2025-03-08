import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, name, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-gray-200">{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      )}
    </div>
  );
};

export default FormField;