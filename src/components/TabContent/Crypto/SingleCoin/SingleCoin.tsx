import React from "react";
import { Crypto } from "../../../../types/types";
import s from "./SingleCoin.module.scss";

export const SingleCoin = ({ data }: { data: Crypto }) => {
  const {
    name,
    current_price,
    symbol,
    total_volume,
    image,
    price_change_percentage_24h,
  } = data;

  return (
    <div className={s.coin_row}>
      <div className={s.coin_title}>
        <img src={image} alt="crypto_image" />
        <h1>{name}</h1>
        <p className={s.coin_symbol}>{symbol}</p>
      </div>
      <div className={s.coin_data}>
        <p className={s.coin_price}>{current_price.toLocaleString()}</p>
        <p
          className={
            s.coin_percent +
            " " +
            (price_change_percentage_24h < 0
              ? s.coin_percent__red
              : s.coin_percent__red)
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className={s.coin_volume}>{total_volume.toLocaleString()}</p>
      </div>
    </div>
  );
};
