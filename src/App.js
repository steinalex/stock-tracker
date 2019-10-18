import React from "react";
import { useSelector } from "react-redux";
import { Headline } from "./features/headline/components";
import { Chart } from "./features/chart/components";
import { LatestNews } from "./features/latest-news/components";
import { KeyStats } from "./features/key-stats/components";
import { Company } from "./features/company/components";
import { Footer } from "./features/footer/components";
import "./App.css";

const App = () => {
  const selectedStock = useSelector(state => state.stockData.selectedStock);

  return (
    <>
      <div className="grid-container">
        <Headline />
        {selectedStock && (
          <>
            <Chart />
            <LatestNews />
            <KeyStats />
            <Company />
          </>
        )}
      </div>
      {selectedStock && <Footer />}
    </>
  );
};

export default App;
