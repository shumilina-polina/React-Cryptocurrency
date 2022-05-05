import React from "react";
import s from "./Input.module.scss";

export const Input = () => {
  const handleInput = () => {};

  return (
    <input
      className={s.input}
      type="text"
      placeholder="Search a crypto…"
      onChange={handleInput}
    />
  );
};
