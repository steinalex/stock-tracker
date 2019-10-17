import {
  UPDATE_SEARCH,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_SEARCH_QUERY
} from "../../../store/constants";

const initialState = {
  selectedSearch: "",
  enteredSearchQuery: "",
  selectedCompanySymbols: []
};
export const headlineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};
