import {
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH_QUERY
} from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export interface ISelectedSearch {
  companyName: string;
  currency: string;
  primaryExchange: string;
  sector: string;
  symbol: string;
}

export type UpdateSearchAction = ActionWithPayload<
  UPDATE_SEARCH,
  ISelectedSearch
>;

export const updateSearchAction = (
  updateSearch: ISelectedSearch
): UpdateSearchAction => ({
  type: UPDATE_SEARCH,
  payload: updateSearch
});

export interface ISelectedSymbols {
  symbol: string;
  name: string;
  exchange: string;
}

export type UpdateCompanySymbolsAction = ActionWithPayload<
  UPDATE_COMPANY_SYMBOLS,
  ISelectedSymbols[]
>;

export const updateCompanySymbolsAction = (
  updateCompanySymbols: ISelectedSymbols[]
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
