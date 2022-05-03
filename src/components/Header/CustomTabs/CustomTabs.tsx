import React, { FC, SyntheticEvent, useState } from "react";
import { tabValue } from "../../../types/types";
import s from "./CustomTabs.module.scss";

export const CustomTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabValue.Currencies);

  const handle = (_: SyntheticEvent, tabValue: tabValue) => {
    if (!(activeTab === tabValue)) {
      setActiveTab(tabValue);
    }
  };

  const tabs = [
    {
      value: tabValue.Currencies,
    },
    {
      value: tabValue.Crypto,
    },
    {
      value: tabValue.Social,
    },
  ];
  return (
    <ul className={s.tabs}>
      {tabs.map((tab, i) => (
        <li
          className={s.tab_container}
          key={tab.value}
          tabIndex={i + 1}
          onClick={(e) => handle(e, tab.value)}
        >
          {tab.value}
        </li>
      ))}
    </ul>
  );
};
