import {
  ON_STOCK_DATA_RECIEVED,
  UPDATE_SELECTED_STOCK,
  BOOTSTRAP,
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
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

export const updateSearchAction = action => ({
  type: UPDATE_SEARCH,
  payload: action
});

export const updateCompanySymbolsAction = action => ({
  type: UPDATE_COMPANY_SYMBOLS,
  payload: action
});

export const updateSearchQueryAction = action => ({
  type: UPDATE_SEARCH_QUERY,
  payload: action
});

export const resetAction = () => ({ type: RESET });
