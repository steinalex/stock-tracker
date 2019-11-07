import {
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH_QUERY
} from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export interface SearchData {
  symbol: string;
  name: string;
}

export type UpdateSearchAction = ActionWithPayload<UPDATE_SEARCH, string>;

export const updateSearchAction = (
  updateSearch: string
): UpdateSearchAction => ({
  type: UPDATE_SEARCH,
  payload: updateSearch
});

export type UpdateCompanySymbolsAction = ActionWithPayload<
  UPDATE_COMPANY_SYMBOLS,
  SearchData[]
>;

export const updateCompanySymbolsAction = (
  updateCompanySymbols: SearchData[]
) => ({
  type: UPDATE_COMPANY_SYMBOLS,
  payload: updateCompanySymbols
});

export type UpdateSearchQueryAction = ActionWithPayload<
  UPDATE_SEARCH_QUERY,
  string
>;

export const updateSearchQueryAction = (updateSearchQuery: string) => ({
  type: UPDATE_SEARCH_QUERY,
  payload: updateSearchQuery
});

export type HeadlineActions =
  | UpdateSearchAction
  | UpdateCompanySymbolsAction
  | UpdateSearchQueryAction
  | ResetAction;
