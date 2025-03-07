import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  style?: React.CSSProperties;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, style }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-center mb-2 pt-5 text-gray-300">Busca tu Crypto</h3>
      <div className="flex justify-center">
        <div className="relative w-full max-w-md mb-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={handleChange}
            className="bg-white w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;

