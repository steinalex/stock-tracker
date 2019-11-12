import { RESET } from "store/constants";
import {
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH,
  UPDATE_SEARCH_QUERY
} from "./constants";
import { Reducer } from "redux";
import { HeadlineActions, ISelectedSearch } from "./actions";
import { ISelectedSymbols } from "./actions";

export interface HeadlineState {
  selectedSearch: ISelectedSearch | "";
  enteredSearchQuery: string;
  selectedCompanySymbols: ISelectedSymbols[];
}

const initialState: HeadlineState = {
  selectedSearch: "",
  enteredSearchQuery: "",
  selectedCompanySymbols: []
};

export const headlineReducer: Reducer<HeadlineState, HeadlineActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        selectedSearch: action.payload
      };
    case UPDATE_COMPANY_SYMBOLS:
      return {
        ...state,
        selectedCompanySymbols: action.payload
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        enteredSearchQuery: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
