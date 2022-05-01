import React, { useCallback, useEffect, useState } from "react";
import SvgSelector from "../../../assets/SvgSelector";
import s from "../Header.module.scss";
import { changeCssRootVariables } from "./ChangeCssRootVariables";

export const ThemeButton = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const changeTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
    changeCssRootVariables(theme);
  }, [theme]);

  useEffect(() => {
    changeCssRootVariables(theme);
  }, [theme]);

  return (
    <button className={s.button_theme} onClick={changeTheme}>
      <SvgSelector id={`theme-${theme}`} />
    </button>
  );
};
