import React from "react";
import { TabContent } from "./components/TabContent/TabContent";
import Header from "./components/Header/Header";
import "./styles/index.scss";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <TabContent />
        {/* <ExchangeBlock/> */}
      </div>
    </div>
  );
}

export default App;
