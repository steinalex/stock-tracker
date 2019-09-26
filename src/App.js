import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateStockAction } from './store/actions';
import Search from './components/Search';

const App = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  
  return (
    <div className="grid-container">
      <p>{state.selectedStock}</p>
      <Search updateStock={(stock) => dispatch(updateStockAction(stock))} />
      {/* <Headline stock={stock} />
      <Chart stock={stock} />
      <LatestNews />
      <KeyStats />
      <Company /> */}
    </div>
  );
}

export default App;