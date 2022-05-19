import React, { SyntheticEvent } from "react";
import s from "./Input.module.scss";

export const Input = ({ onChange }: { onChange: (e: SyntheticEvent) => void }) => {
  return (
    <input
      className={s.input}
      type="text"
      placeholder="Search a crypto…"
      onChange={onChange}
    />
  );
};
