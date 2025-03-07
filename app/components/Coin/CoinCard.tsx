import React from 'react';
import type { Coin as CoinType } from "../../types";




interface CoinCardProps {
  coin: CoinType;
}

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className='coin-card'>
      <img src={coin.image_url} alt={coin.name} width={50} height={50} />
      <h3>{coin.name} ({coin.symbol})</h3>
      <p>💰 Precio: ${coin.price.toFixed(2)}</p>
      <p style={{ color: coin.change24h < 0 ? 'red' : 'green' }}>
        📉 Cambio 24h: {coin.change24h.toFixed(2)}%
      </p>
    </div>
  );
}
