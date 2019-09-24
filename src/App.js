import React, { useState, useEffect } from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const io = require('socket.io-client');
const socket = io('http://localhost:4000');


function App() {
  const [response, setResponse] = useState(false);
  const [stock, setStock] = useState('AAPL');
  const [symbol, setSymbol] = useState('');
  const [chartData, setChartData] =useState('')

  useEffect(() => {
    socket.on('FromAPI', (payload1, payload2,payload3) => {
      setResponse(payload1);
      setChartData(payload2);
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
      <button>1D</button>
      <button>5D</button>
      <button>1M</button>
      <button>1Y</button>
      <button>5Y</button>
      <button>MAX</button>
        <AreaChart width={600} height={400} data={chartData}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='close' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
    
    </>
  );
}

export default App;