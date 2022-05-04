import React from "react";
import s from "./Currencies.module.scss";

export const Currencies = () => {
  const handleInput = () => {};

  return (
    <section className={s.currencies_container}>
      <input
        className={s.input}
        type="text"
        placeholder="Search a currency…"
        onChange={handleInput}
      />
    </section>
  );
};
