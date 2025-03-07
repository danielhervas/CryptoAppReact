export interface Coin {
    id: string;
    name: string;
    symbol: string;
    algorithm?: string;
    type?: string;
    image_url?: string;
    price: number;
    change24h: number;
  }
  