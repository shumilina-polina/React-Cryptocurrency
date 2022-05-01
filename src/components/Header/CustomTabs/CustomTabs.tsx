import React, { FC } from "react";
import s from "./CustomTabs.module.scss";

export const CustomTabs: FC = () => {
  const tabs = [
    {
      value: "Currencies",
    },
    {
      value: "Crypto",
    },
    {
      value: "Social",
    },
  ];
  return (
    <ul className={s.tabs}>
      {tabs.map((tab, i) => (
        <li className={s.tab_container} key={tab.value} tabIndex={i + 1}>
          <div className={s.tab}>{tab.value}</div>
        </li>
      ))}
    </ul>
  );
};
