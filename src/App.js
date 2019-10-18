import React from "react";
import { useSelector } from "react-redux";
import { Headline } from "./features/headline";
import { Chart } from "./features/chart";
import { LatestNews } from "./features/latest-news";
import { KeyStats } from "./features/key-stats";
import { Company } from "./features/company";
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
