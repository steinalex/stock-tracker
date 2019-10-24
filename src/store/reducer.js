import { combineReducers } from "redux";
import { peerReducer } from "../features/peers";
import { companyOverviewReducer } from "../features/company";
import { latestNewsReducer } from "../features/latest-news";
import { keyStatsReducer } from "../features/key-stats";
import { stockTickerReducer } from "../features/stock-ticker";
import { chartReducer } from "../features/chart";
import { headlineReducer } from "../features/headline";
import { stockReducer } from "../reducer";

export const combinedReducer = combineReducers({
  stockData: stockReducer,
  peerData: peerReducer,
  companyOverviewData: companyOverviewReducer,
  latestNewsData: latestNewsReducer,
  keyStatsData: keyStatsReducer,
  stockTickerData: stockTickerReducer,
  chartData: chartReducer,
  headlineData: headlineReducer
});
