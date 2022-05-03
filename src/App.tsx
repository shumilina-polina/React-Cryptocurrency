import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import { tabValue } from "./types/types";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
