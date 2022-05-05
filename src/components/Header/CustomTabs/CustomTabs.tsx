import React, { FC, SyntheticEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { tabsSlice } from "../../../store/reducers/TabsSlice";
import { tabValue } from "../../../types/types";
import s from "./CustomTabs.module.scss";

export const CustomTabs: FC = () => {
  const { changeTab } = tabsSlice.actions;
  const { currentTab } = useAppSelector((state) => state.tabsReducer);
  const dispatch = useAppDispatch();

  const handleTab = useCallback(
    (_: SyntheticEvent, tabValue: tabValue) => {
      if (!(currentTab === tabValue)) {
        dispatch(changeTab(tabValue));
      }
    },
    [currentTab]
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
        <li
          className={
            s.tab_container +
            (currentTab === tab.value ? " " + s.tab_container__active : "")
          }
          key={tab.value}
          tabIndex={i + 1}
          onClick={(e) => handleTab(e, tab.value)}
        >
          {tab.value}
        </li>
      ))}
    </ul>
  );
};
