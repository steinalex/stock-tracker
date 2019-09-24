import React, { useState, useEffect } from "react";
import { RenderTable } from './components/KeyStats';
import Search from './components/Search';

import { Provider } from 'react-redux';
import { store } from './redux'

const io = require('socket.io-client');
const socket = io('http://localhost:4000');

function App() { 
  const [response, setResponse] = useState(false);
  const [symbol, setSymbol] = useState('');

  return (
    <Provider store={store}>
      <Search socket={socket} />
      <p>Current search</p>
      <RenderTable response={response} />

    </Provider>
  );
}

export default App;