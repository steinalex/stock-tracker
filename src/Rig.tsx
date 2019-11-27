import React, { useEffect } from "react";
import io from "socket.io-client";
import { stockService, createRpcClient } from "services";

const HOST = window.location.hostname;
const PORT = 4000;
const SERVER = `${HOST}:${PORT}`;

const rpcClient = createRpcClient(io(SERVER));
const service = stockService(rpcClient);

export const Rig = () => {
  useEffect(() => {
    service
      .getSectorData("AAPL")
      .then(console.log)
      .catch(console.log);

    service
      .getNews("AAPL")
      .then(console.log)
      .catch(console.log);

    service
      .getKeyStats("AAPL")
      .then(console.log)
      .catch(console.log);

    service
      .getChart("AAPL", "1D")
      .then(console.log)
      .catch(console.log);

    service
      .getCompanyOverview("AAPL")
      .then(console.log)
      .catch(console.log);
  }, []);
  return <div>Hello</div>;
};
