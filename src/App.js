import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateChartAction } from './store/actions';
import {Headline} from "./components/Headline";
import Chart from "./components/Chart";
import LatestNews from "./components/LatestNews"
import KeyStats from "./components/KeyStats"
import {Company} from "./components/Company"

const App = () => {
  const selectedSearch = useSelector((state) => state.selectedSearch)

  return (
    <div className="grid-container">
      <Headline stock={selectedSearch} />
      {selectedSearch ? <Body /> : <LoadingState />}
    </div>
  );
}

const LoadingState = () => 'I AM LOADING';

const Body = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch();

  return (
    <>
      <Chart stock={state.selectedChartData} latestPrice={state.selectedStockTicker} updateChartRange={(stock) => dispatch(updateChartAction(stock))}/>
      <LatestNews stock={state.selectedLatestNews} />
      <KeyStats stock={state.selectedKeyStats} />
      <Company stock={state.selectedCompanyOverview} />
    </>
  )
}

export default App;