import {
  ON_STOCK_DATA_RECIEVED,
  UPDATE_SELECTED_STOCK,
  UPDATE_CHART_RANGE,
  BOOTSTRAP,
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

export const bootstrap = () => ({ type: BOOTSTRAP });

export const updateResponseAction = action => ({
  type: ON_STOCK_DATA_RECIEVED,
  payload: action
});

export const updateStockAction = action => ({
  type: UPDATE_SELECTED_STOCK,
  payload: action
});

export const updateChartAction = action => ({
  type: UPDATE_CHART_RANGE,
  payload: action
});

export const updateKeyStatsAction = action => ({
  type: UPDATE_KEY_STATS,
  payload: action
});

export const updateLatestNewsAction = action => ({
  type: UPDATE_LATEST_NEWS,
  payload: action
});

export const updateCompanyOverviewAction = action => ({
  type: UPDATE_COMPANY_OVERVIEW,
  payload: action
});

export const updateTopPeersAction = action => ({
  type: UPDATE_TOP_PEERS,
  payload: action
});

export const updateSearchAction = action => ({
  type: UPDATE_SEARCH,
  payload: action
});

export const updateCompanySymbolsAction = action => ({
  type: UPDATE_COMPANY_SYMBOLS,
  payload: action
});

export const updateStockTickerAction = action => ({
  type: UPDATE_STOCK_TICKER,
  payload: action
});

export const updateChartDataAction = action => ({
  type: UPDATE_CHART_DATA,
  payload: action
});

export const updateSearchQueryAction = action => ({
  type: UPDATE_SEARCH_QUERY,
  payload: action
});

export const resetAction = () => ({ type: RESET });
