import React, { useState, useEffect } from "react";
import Search from './Search';

const io = require('socket.io-client');
const socket = io('http://localhost:4000');

function App() {
  const [response, setResponse] = useState(false);
  const [stock, setStock] = useState("AAPL");

  useEffect(() => {
    socket.on('FromAPI', payload => {
      setResponse(payload);
    });

    socket.emit('stockName', stock);
  }, [stock]);

  return (
    <>
      <Search />
      <ul>
        {Object.keys(response).map((key, index) =>
          <li key={index}>{key}: {response[key]}</li>
        )}
      </ul>
    </>
  );
}

export default App;