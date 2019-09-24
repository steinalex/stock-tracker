import React, { useState, useEffect } from "react";
import KeyStats from './components/KeyStats';
import Search from './components/Search';

import { updateResponseAction } from './redux';

import { useDispatch, useSelector } from 'react-redux';

const io = require('socket.io-client');
const socket = io('http://localhost:4000');

function App() {

  const stock = useSelector((state) => state.stock)

  const response = useSelector((state) => state.response)
  const dispatch = useDispatch();
  const addResponse = (data) => dispatch(updateResponseAction(data));

  useEffect(() => {
    socket.on('FromAPI', payload => {
      addResponse(payload);
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
    </>
  );
}

export default App;