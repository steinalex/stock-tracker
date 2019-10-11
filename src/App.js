import React from "react";
import { useSelector } from "react-redux";
import { Headline } from "./components/Headline";
import Chart from "./components/Chart";
import LatestNews from "./components/LatestNews";
import KeyStats from "./components/KeyStats";
import { Company } from "./components/Company";
import { Footer } from "./components/Footer";

const App = () => {
  const state = useSelector(state => state);

  return (
    <>
      <div className="grid-container">
        <Headline />
        {state.selectedStock ? (
          <>
            <Chart />
            <LatestNews />
            <KeyStats />
            <Company />
          </>
        ) : (
          ""
        )}
      </div>
      {state.selectedStock && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
