import React from "react";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import { ExchangeBlock } from "./components/ExchangeBlock/ExchangeBlock";
import { TabContent } from "./components/TabContent/TabContent";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <div className="content_wrapper">
          <TabContent />
          <ExchangeBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
