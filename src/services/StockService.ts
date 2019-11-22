import { StockAPI } from "./IStockService";
import { ISelectedSearch } from "features/headline/redux/actions";
import { ILatestNews } from "features/latest-news/redux/actions";
import { ChartData } from "features/chart/redux/actions";
import { IKeyStats } from "features/key-stats/redux/actions";
import { CompanyOverview } from "features/company/redux/actions";
import { IPeers } from "features/peers/redux/actions";
import { RpcClient } from "./rpcClient";

export const stockService: (rpc: RpcClient) => StockAPI = rpc => ({
  getNews: (stockName: string) =>
    rpc<ILatestNews, string>("getNews", stockName),
  getChart: (stockName: string, timeRange: string) =>
    rpc<ChartData, string>("getChart", stockName, timeRange),
  getSectorData: (stockName: string) =>
    rpc<ISelectedSearch, string>("getSectorData", stockName),
  getKeyStats: (stockName: string) =>
    rpc<IKeyStats, string>("getKeyStats", stockName),
  getCompanyOverview: (stockName: string) =>
    rpc<CompanyOverview, string>("getCompanyOverview", stockName),
  getTopPeers: (stockName: string) =>
    rpc<IPeers, string>("getTopPeers", stockName)
});
