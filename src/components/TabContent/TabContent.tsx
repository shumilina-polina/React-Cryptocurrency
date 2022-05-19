import React, { SyntheticEvent, useMemo, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { tabValue } from "../../types/types";
import { Crypto } from "./Crypto/Crypto";
import s from "./TabContent.module.scss";

export const TabContent = () => {
  const { currentTab } = useAppSelector((state) => state.tabsReducer);

  const renderedTabContent = useMemo(() => {
    switch (currentTab) {
      case tabValue.Crypto:
        return <Crypto />;
      case tabValue.Currencies:
        return <section>Currencies</section>;
      case tabValue.Social:
        return <section>Social</section>;
      default:
        return <h1>Error...</h1>;
    }
  }, [currentTab]);

  return <div className={s.content_container}>{renderedTabContent}</div>;
};
