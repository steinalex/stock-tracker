import { combineReducers } from "redux";
import { peerReducer } from "../features/peers/redux/reducer";
import { companyOverviewReducer } from "../features/company/redux/reducer";
import { latestNewsReducer } from "../features/latest-news/redux/reducer";
import { keyStatsReducer } from "../features/key-stats/redux/reducer";
import { stockTickerReducer } from "../features/stock-ticker/redux/reducer";
import { chartReducer } from "../features/chart/redux/reducer";
import { headlineReducer } from "../features/headline/redux/reducer";
import { stockReducer } from "../App-reducer";

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
