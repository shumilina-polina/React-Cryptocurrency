import React, { useMemo } from "react";
import { useAppSelector } from "../../hooks/redux";
import { tabValue } from "../../types/types";
import { Currencies } from "./Currencies/Currencies";
import s from "./TabContent.module.scss";

export const TabContent = () => {
  const { currentTab } = useAppSelector((state) => state.tabsReducer);

  const renderedTabContent = useMemo(() => {
    switch (currentTab) {
      case tabValue.Currencies:
        return <Currencies />;
      case tabValue.Crypto:
        return <section>Crypto</section>;
      case tabValue.Social:
        return <section>Social</section>;
      default:
        return <section>Currencies</section>;
    }
  }, [currentTab]);

  return <div className={s.content_container}>{renderedTabContent}</div>;
};
