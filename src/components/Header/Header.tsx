import React, { FC } from "react";
import SvgSelector from "../../assets/SvgSelector";
import { CustomTabs } from "./CustomTabs/CustomTabs";
import s from "./Header.module.scss";
import { ThemeButton } from "./ThemeButton/ThemeButton";

interface Props {}

const Header: FC = (props: Props) => {
  
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <SvgSelector id="header-logo" />
          <span>PCoin</span>
        </div>
        <CustomTabs />
      </div>
      <ThemeButton/>
    </header>
  );
};

export default Header;
