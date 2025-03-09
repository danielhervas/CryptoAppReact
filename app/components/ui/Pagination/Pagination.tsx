import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 mb-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l-lg hover:bg-gray-400 disabled:opacity-50 hover:border-red-500 hover:border-1"
      >
        Anterior
      </button>
      <span className="px-4 py-2 text-gray-300">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-400 disabled:opacity-50  hover:border-green-500 hover:border-1"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;