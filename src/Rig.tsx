import React, { useEffect } from "react";
import { socketService } from "./services";
import { ISelectedSearch } from "features/headline/redux/actions";

interface StockAPI {
  getSectorData: (stockName: string) => Promise<ISelectedSearch>;
}

class StockService implements StockAPI {
  constructor(private socket: SocketIOClient.Socket) {}

  getSectorData(stockName: string) {
    return new Promise<ISelectedSearch>((resolve, rej) => {
      this.socket.emit("getSectorData", stockName);
      this.socket.on("getSectorDataResult", (result: ISelectedSearch) => {
        resolve(result);
      });
    });
  }
}

const service = new StockService(socketService.get());

export const Rig = () => {
  useEffect(() => {
    service
      .getSectorData("AAPL")
      .then(console.log)
      .catch(console.log);
  }, []);
  return <div>Hello</div>;
};
