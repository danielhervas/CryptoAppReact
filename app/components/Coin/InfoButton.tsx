
import React from 'react';

interface BinanceButtonProps {
  symbol: string;
}

const BinanceButton: React.FC<BinanceButtonProps> = ({ symbol }) => {
  const binanceUrl = `https://www.binance.com/en/trade/${symbol}_USDT`;

  return (
    <a
      href={binanceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-white hover:border-green-500 hover:border-2 hover:text-black transition duration-200"
    >
      Mas Info
    </a>
  );
};

export default BinanceButton;
