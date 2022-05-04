import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { tabValue } from "../../types/types";
import s from "./Currency.module.scss";

export const TabContent = () => {
  const { currentTab } = useAppSelector((state) => state.tabsReducer);

  switch (currentTab) {
    case tabValue.Currencies:
      return <section>Currency</section>;
    case tabValue.Crypto:
      return <section>Crypto</section>;
    case tabValue.Social:
      return <section>Social</section>;
    default:
      return <section>Currency</section>;
  }
};
