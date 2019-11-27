import { ISelectedSearch } from "features/headline/redux/actions";
import { ILatestNews } from "features/latest-news/redux/actions";
import { ChartData } from "features/chart/redux/actions";
import { IKeyStats } from "features/key-stats/redux/actions";
import { CompanyOverview } from "features/company/redux/actions";
import { IStockTicker } from "features/stock-ticker/redux/actions";

export interface StockAPI {
    getSectorData: (stockName: string) => Promise<ISelectedSearch>;
    getNews: (stockName: string) => Promise<ILatestNews>;
    getChart: (stockName: string, timeRange: string) => Promise<ChartData>;
    getKeyStats: (stockName: string) => Promise<IKeyStats>;
    getCompanyOverview: (stockName: string) => Promise<CompanyOverview>;
    getStockTicker?: (
      stockName: string,
      onPrice: (price: IStockTicker) => void
    ) => void;
  }