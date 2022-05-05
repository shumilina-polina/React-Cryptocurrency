import React from "react";
import { Input } from "../Input/Input";
import s from "./Currencies.module.scss";

export const Currencies = () => {
  return (
    <section className={s.currencies_container}>
      <Input />
    </section>
  );
};
