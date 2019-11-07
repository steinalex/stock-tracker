import { RESET } from "../../../store/constants";
import {
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH,
  UPDATE_SEARCH_QUERY
} from "./constants";
import { Reducer } from "redux";
import { HeadlineActions } from "./actions";
import { SearchData } from "./actions";

export interface HeadlineState {
  selectedSearch: string;
  enteredSearchQuery: string;
  selectedCompanySymbols: SearchData[];
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
