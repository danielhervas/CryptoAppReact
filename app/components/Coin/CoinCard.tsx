import React from 'react';
import type { Coin as CoinType } from '../../types';
import BinanceButton from './InfoButton';  // Importa el nuevo componente

interface CoinCardProps {
  coin: CoinType;
}

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center border border-gray-300 rounded-xl p-4 shadow-md bg-white">
      {/* Imagen alineada a la izquierda */}
      <div className="flex items-center mb-4 sm:mb-0 sm:mr-6">
        <img
          src={coin.image_url}
          alt={coin.name}
          className="w-16 h-16 object-contain rounded-full border border-gray-400"
        />
      </div>

      {/* Información distribuida en una fila */}
      <div className="flex-1 flex flex-col sm:flex-row justify-between items-center sm:items-center">
        <div className="flex-1 mb-2 sm:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold truncate">{coin.name} ({coin.symbol})</h3>
        </div>
        <div className="flex-1 mb-2 sm:mb-0 text-center sm:text-left">
          <p className="text-gray-600">💰 ${coin.price.toFixed(2)}</p>
        </div>
        <div className="flex-1 text-center sm:text-right">
          <p className={`font-semibold ${coin.change24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
            📉 {coin.change24h.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Botón de enlace a Binance */}
      <div className="w-full mt-4 text-center">
        <BinanceButton symbol={coin.symbol} />  {/* Usamos el componente aquí */}
      </div>
    </div>
  );
}
