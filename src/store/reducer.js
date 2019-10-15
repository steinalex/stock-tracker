import {
  UPDATE_SELECTED_STOCK,
  UPDATE_CHART_RANGE,
  UPDATE_KEY_STATS,
  UPDATE_LATEST_NEWS,
  UPDATE_COMPANY_OVERVIEW,
  UPDATE_TOP_PEERS,
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_STOCK_TICKER,
  UPDATE_CHART_DATA,
  UPDATE_SEARCH_QUERY,
  RESET
} from "./constants";
import { combineReducers } from "redux";

const initialState = {
  selectedStock: "",
  selectedSearch: "",
  selectedQuotes: "",
  enteredSearchQuery: "",
  selectedCompanySymbols: []
};

const componentInitialState = {
  selectedChartRange: "5y",
  selectedKeyStats: "",
  selectedLatestNews: null,
  selectedCompanyOverview: null,
  selectedTopPeers: null,
  selectedChartData: null,
  selectedStockTicker: ""
};

const componentReducer = (state = componentInitialState, { type, payload }) => {
  // console.log(state)
  // console.log(type, payload)
  switch (type) {
    case UPDATE_CHART_RANGE:
      return {
        ...state,
        selectedChartRange: payload
      };
    case UPDATE_KEY_STATS:
      return {
        ...state,
        selectedKeyStats: payload
      };
    case UPDATE_LATEST_NEWS:
      return {
        ...state,
        selectedLatestNews: payload
      };
    case UPDATE_COMPANY_OVERVIEW:
      return {
        ...state,
        selectedCompanyOverview: payload
      };
    case UPDATE_TOP_PEERS:
      return {
        ...state,
        selectedTopPeers: payload
      };
    case UPDATE_CHART_DATA:
      return {
        ...state,
        selectedChartData: payload
      };
    case UPDATE_STOCK_TICKER:
      return {
        ...state,
        selectedStockTicker: payload
      };
    default:
      return state;
  }
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
  referenceData: componentReducer
});
