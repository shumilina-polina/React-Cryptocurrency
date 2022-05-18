import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/store";
import { fetchCrypto } from "../../../store/thunks/fetchCrypto";
import { Input } from "../Input/Input";
import { SingleCoin } from "./SingleCoin/SingleCoin";
import s from "./Crypto.module.scss";

export const Crypto = () => {
  const dispatch = useAppDispatch();

  const { crypto } = useAppSelector((state: RootState) => state.cryptoReducer);

  useEffect(() => {
    dispatch(fetchCrypto("usd"));
  }, []);

  return (
    <section className={s.crypto_container}>
      <Input />
      {/* <SelectCurrency/> */}
      <div className={s.coin_container}>
        {crypto.map((coin) => {
          return <SingleCoin key={coin.id} data={coin} />;
        })}
      </div>
    </section>
  );
};
