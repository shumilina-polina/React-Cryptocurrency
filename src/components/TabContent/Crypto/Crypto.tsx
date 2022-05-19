import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/store";
import { fetchCrypto } from "../../../store/thunks/fetchCrypto";
import { SingleCoin } from "./SingleCoin/SingleCoin";
import s from "./Crypto.module.scss";
import { Input } from "../Input/Input";

export const Crypto = () => {
  const dispatch = useAppDispatch();
  const { crypto } = useAppSelector((state: RootState) => state.cryptoReducer);

  const [scrollCount, setScrollCount] = useState(8);
  const [search, setSearch] = useState<string>("");

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

  const handleInput = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setSearch(input.value);
  };

  const filteredCrypto = useMemo(
    () =>
      crypto.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, crypto]
  );

  return (
    <section className={s.crypto_container}>
      <Input onChange={handleInput} />
      {/* <SelectCurrency/> */}
      <div className={s.coin_container} onScroll={scrollHandler}>
        {filteredCrypto.map((coin) => {
          return <SingleCoin key={coin.id} data={coin} />;
        })}
      </div>
    </section>
  );
};
