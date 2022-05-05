import React from "react";
import { Input } from "../Input/Input";
import s from "./Crypto.module.scss";

export const Crypto = () => {
  return (
    <section className={s.crypto_container}>
      <Input />
    </section>
  );
};
