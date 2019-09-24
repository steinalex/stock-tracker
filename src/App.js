import React, { useState, useEffect } from "react";
import { RenderTable } from './components/KeyStats';
import Search from './components/Search';

import { useSelector } from 'react-redux';

const io = require('socket.io-client');
const socket = io('http://localhost:4000');

function App() { 

  const stock = useSelector((state) => state.stock)

  const [response, setResponse] = useState(false);

  useEffect(() => {
    socket.on('FromAPI', payload => {
      setResponse(payload);
    });

    socket.emit('stockName', stock);
  }, [stock]);

  return (
    <>
      <Search socket={socket} />
      <p>Current search</p>
      <RenderTable response={response} />
      </>
  );
}

export default App;