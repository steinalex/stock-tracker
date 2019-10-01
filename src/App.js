import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateStockAction, updateChartAction } from './store/actions';
import Search from './components/Search';
import {Headline} from "./components/Headline";
import Chart from "./components/Chart";
import LatestNews from "./components/LatestNews"
import KeyStats from "./components/KeyStats"
import {Company} from "./components/Company"
import Peers from "./components/Peers";
import { Quotes } from "./components/Quotes";
import { StockTicker } from "./components/StockTicker";

// updateChartRange={(stock) => dispatch(updateChartAction(stock))}

const App = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(state)
  return (
    <div className="grid-container">
      <Headline stock={state.selectedSearch} />
      {/* <Search updateStock={(stock) => dispatch(updateStockAction(stock))} /> */}
      {/* <Quotes stock={state.selectedQuotes}/> */}
      <Chart stock={state.selectedChartData} updateChartRange={(stock) => dispatch(updateChartAction(stock))}/>
      <LatestNews stock={state.selectedLatestNews} />
      <KeyStats stock={state.selectedKeyStats} />
      <Company stock={state.selectedCompanyOverview} /> 
      {/* <Peers stock={state.selectedTopPeers}/> */}
      {/* <StockTicker stock={state.selectedStockTicker} /> */}
    </div>
  );
}

export default App;