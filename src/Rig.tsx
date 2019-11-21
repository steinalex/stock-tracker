import React, { useEffect } from "react";
import { socketService } from "./services";
import { ISelectedSearch } from "features/headline/redux/actions";
import { ILatestNews } from "features/latest-news/redux/actions";
import { IStockTicker } from "features/stock-ticker/redux/actions";
import { ChartData } from "features/chart/redux/actions";
import { IKeyStats } from "features/key-stats/redux/actions";

interface StockAPI {
  getSectorData: (stockName: string) => Promise<ISelectedSearch>;
  getNews: (stockName: string) => Promise<ILatestNews>;
  getChart: (stockName: string, timeRange: string) => Promise<ChartData>;
  getStockTicker?: (
    stockName: string,
    onPrice: (price: IStockTicker) => void
  ) => void;
}

interface BadResult {
  status: "ERROR";
}

interface GoodResult<T> {
  status: "OK";
  data: T;
}

type Result<T> = BadResult | GoodResult<T>;

const SECTOR_DATA_TOPIC = "getSectorData";
const NEWS_TOPIC = "getNews";
const CHART_TOPIC = "getChart";
const KEY_STATS_TOPIC = "getKeyStats";

class StockService implements StockAPI {
  constructor(private socket: SocketIOClient.Socket) {}

  private createTopicName(service: string) {
    return service + Math.abs(Math.random() * 1000).toFixed(0);
  }

  private rpc<TResult, A>(topic: string, prefix: string, ...args: A[]) {
    return new Promise<TResult>((resolve, reject) => {
      const replyTo = this.createTopicName(prefix);
      this.socket.emit(topic, replyTo, ...args);
      this.socket.on(replyTo, (result: Result<TResult>) => {
        this.socket.off(replyTo);
        result.status === "OK" ? resolve(result.data) : reject(result.status);
      });
    });
  }

  getSectorData(stockName: string) {
    return this.rpc<ISelectedSearch, string>(
      SECTOR_DATA_TOPIC,
      "SECTOR",
      stockName
    );
  }

  getNews(stockName: string) {
    return this.rpc<ILatestNews, string>(NEWS_TOPIC, "NEWS", stockName);
  }

  getChart(stockName: string, timeRange: string) {
    return this.rpc<ChartData, string>(
      CHART_TOPIC,
      "CHART",
      stockName,
      timeRange
    );
  }

  getKeyStats(stockName: string) {
    return this.rpc<IKeyStats, string>(KEY_STATS_TOPIC, "KEY_STATS", stockName);
  }

  getEverything(stockName: string, timeRange: string) {
    return Promise.all([
      this.getNews(stockName),
      this.getSectorData(stockName),
      this.getChart(stockName, timeRange),
      this.getKeyStats(stockName)
    ]);
  }
}

const service = new StockService(socketService.get());

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
      .getChart("AAPL", "1D")
      .then(console.log)
      .catch(console.log);
  }, []);
  return <div>Hello</div>;
};
