export enum tabValue {
  Crypto = "Crypto",
  Currencies = "Currencies",
  Social = "Social",
}

export type Crypto = {
  image: string;
  name: string;
  id: string;
  symbol: string;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number;
};
