import React, {useEffect } from "react";
import Search from './components/Search';
import Chart from './components/Chart';
import KeyStats from './components/KeyStats';
import LatestNews from './components/LatestNews';
import { updateResponseAction, updateChartAction } from './redux';
import { useDispatch, useSelector } from 'react-redux';
import Company from "./components/Company";
import Peers from "./components/peers";

const io = require('socket.io-client');
const socket = io('http://localhost:4000');


function App() {
  const stock = useSelector((state) => state.stock)
  const dispatch = useDispatch();
  const addResponse = (data) => dispatch(updateResponseAction(data));
  const addChartData = (data) => dispatch(updateChartAction(data));

  useEffect(() => {
    socket.on('FromAPI', (payload1, payload2) => {
      addResponse(payload1);
      addChartData(payload2);
    });
  })

  useEffect(() => {
    socket.emit('stockName', stock);
  }, [stock]);

  return (
    <>
      <Search />
      <p>Current search: {stock}</p>
      <KeyStats />
      <Chart />
      <LatestNews />
      <Company />
      <Peers />

    </>
  );
}

export default App;