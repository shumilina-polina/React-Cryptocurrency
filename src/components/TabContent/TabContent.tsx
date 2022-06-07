import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { tabValue } from "../../types/types";
import { Crypto } from "./Crypto/Crypto";
import s from "./TabContent.module.scss";

export const TabContent = () => {
  return (
    <div className={s.content_container}>
      <Routes>
        <Route index element={<Crypto />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/currencies" element={<h2>Currencies</h2>} />
        <Route path="/social" element={<h2>Social</h2>} />
      </Routes>
    </div>
  );
};
