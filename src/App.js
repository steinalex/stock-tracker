import React, { useState, useEffect } from "react";

const io = require('socket.io-client');
const socket = io('http://localhost:4000');

function App() {
  const [response, setResponse] = useState(false);
  const [stock, setStock] = useState('AAPL');
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    socket.on('FromAPI', payload => {
      setResponse(payload);
    });

    socket.emit('stockName', stock);
  }, [stock]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setStock(symbol);
    setSymbol('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Symbol: 
        <input
            type="text"
            value={symbol}
            onChange={e => setSymbol(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>Current search: {stock}</p>
      <ul>
        {Object.keys(response).map((key, index) =>
          <li key={index}>{key}: {response[key]}</li>
        )}
      </ul>
    </>
  );
}

export default App;