import {
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH_QUERY
} from "../../../store/constants";

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
