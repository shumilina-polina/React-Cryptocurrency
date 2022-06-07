import { FC, useState } from "react";
import { tabValue } from "../../../types/types";
import { Link } from "react-router-dom";

import s from "./CustomTabs.module.scss";

export const CustomTabs: FC = () => {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab") || tabValue.Crypto
  );

  const tabs = [
    {
      value: tabValue.Crypto,
    },
    {
      value: tabValue.Currencies,
    },
    {
      value: tabValue.Social,
    },
  ];
  return (
    <ul className={s.tabs}>
      {tabs.map((tab, i) => (
        <Link
          className="link"
          to={"/" + tab.value.toLowerCase()}
          key={tab.value}
        >
          <li
            className={
              s.tab_container +
              (currentTab === tab.value ? " " + s.tab_container__active : "")
            }
            tabIndex={i + 1}
            onClick={() => {
              setCurrentTab(tab.value);
              localStorage.setItem("currentTab", tab.value);
            }}
          >
            {tab.value}
          </li>
        </Link>
      ))}
    </ul>
  );
};
