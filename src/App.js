import React from "react";
import { useSelector } from "react-redux";
import { Headline } from "./components/headline";
import { Chart } from "./components/chart";
import { LatestNews } from "./components/latest-news";
import { KeyStats } from "./components/key-stats";
import { Company } from "./components/company";
import { Footer } from "./components/footer";
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
