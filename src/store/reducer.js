import {
  UPDATE_SELECTED_STOCK,
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH_QUERY,
  RESET
} from "./constants";
import { combineReducers } from "redux";
import { peerReducer } from "../features/peers/redux/reducer";
import { companyOverviewReducer } from "../features/company/redux/reducer";
import { latestNewsReducer } from "../features/latest-news/redux/reducer";
import { keyStatsReducer } from "../features/key-stats/redux/reducer";
import { stockTickerReducer } from "../features/stock-ticker/redux/reducer";
import { chartReducer } from "../features/chart/redux/reducer";

const initialState = {
  selectedStock: "",
  selectedSearch: "",
  selectedQuotes: "",
  enteredSearchQuery: "",
  selectedCompanySymbols: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SELECTED_STOCK:
      return {
        ...state,
        selectedStock: payload
      };

    case UPDATE_SEARCH:
      return {
        ...state,
        selectedSearch: payload
      };
    case UPDATE_COMPANY_SYMBOLS:
      return {
        ...state,
        selectedCompanySymbols: payload
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        enteredSearchQuery: payload
      };

    case RESET:
      return { ...initialState, selectedStock: state.selectedStock };

    default:
      return state;
  }
};

export const combinedReducer = combineReducers({
  stockData: reducer,
  peerData: peerReducer,
  companyOverviewData: companyOverviewReducer,
  latestNewsData: latestNewsReducer,
  keyStatsData: keyStatsReducer,
  stockTickerData: stockTickerReducer,
  chartData: chartReducer
});
