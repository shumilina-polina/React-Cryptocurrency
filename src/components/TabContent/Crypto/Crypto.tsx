import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/store";
import { fetchCrypto } from "../../../store/thunks/fetchCrypto";
import { Input } from "../Input/Input";
import { SingleCoin } from "./SingleCoin/SingleCoin";
import s from "./Crypto.module.scss";

export const Crypto = () => {
  const dispatch = useAppDispatch();
  const [scrollCount, setScrollCount] = useState(8);

  const { crypto } = useAppSelector((state: RootState) => state.cryptoReducer);
  const scrollDiv = useRef(null);

  useEffect(() => {
    dispatch(fetchCrypto("usd"));
  }, []);

  const scrollHandler = useCallback(
    (e: SyntheticEvent) => {
      const elem = e.target as HTMLElement;

      if (
        (Math.floor(elem.scrollHeight - elem.scrollTop) === elem.clientHeight ||
          Math.ceil(elem.scrollHeight - elem.scrollTop) ===
            elem.clientHeight) &&
        scrollCount < 50
      ) {
        setScrollCount(scrollCount + 4);
        dispatch(fetchCrypto("usd", scrollCount));
      }
    },
    [scrollCount]
  );

  return (
    <section className={s.crypto_container}>
      <Input />
      {/* <SelectCurrency/> */}
      <div className={s.coin_container} onScroll={scrollHandler}>
        {crypto.map((coin) => {
          return <SingleCoin key={coin.id} data={coin} />;
        })}
      </div>
    </section>
  );
};
