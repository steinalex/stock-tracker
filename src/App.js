import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateStockAction,updateResponseAction, updateChartAction } from './store/actions';
import Search from './components/Search';
import {Headline} from "./components/Headline";
import Chart from "./components/Chart";
import LatestNews from "./components/LatestNews"
import KeyStats from "./components/KeyStats"
import {Company} from "./components/Company"
import Peers from "./components/peers";

// updateChartRange={(stock) => dispatch(updateChartAction(stock))}

const App = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log("App.js", state.stockData)
  return (
    <div className="grid-container">
      <p>{state.selectedStock}</p>
      <Search updateStock={(stock) => dispatch(updateStockAction(stock))} />
      <Headline stock={state.stockData} />
      <Chart chartData={state.stockData.monthData} />
      <LatestNews stock={state.stockData} />
      <KeyStats stock={state.stockData} />
      <Company stock={state.stockData} /> 
      <Peers stock={state.stockData}/>
    </div>
  );
}

export default App;