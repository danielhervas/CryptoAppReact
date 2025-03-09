import React from 'react';

const NoResults: React.FC = () => {
  const handleResetSearch = () => {
    window.location.reload();
  };

  return (
    <div className="text-center text-gray-500 mt-8">
      <p>No se ha encontrado la criptomoneda.</p>
      <button
        onClick={handleResetSearch}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Reiniciar Búsqueda
      </button>
    </div>
  );
};

export default NoResults;