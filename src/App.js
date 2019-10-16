import React from "react";
import { useSelector } from "react-redux";
import { Headline } from "./components/Headline";
import Chart from "./components/chart";
import LatestNews from "./components/LatestNews";
import KeyStats from "./components/KeyStats";
import { Company } from "./components/Company";
import { Footer } from "./components/Footer";

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
