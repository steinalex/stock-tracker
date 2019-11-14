import {
  UPDATE_SEARCH,
  UPDATE_SEARCH_QUERY,
  UPDATE_COMPANY_SYMBOLS
} from "../constants";
import { headlineReducer, HeadlineState } from "../reducer";
import {
  UpdateSearchAction,
  UpdateSearchQueryAction,
  UpdateCompanySymbolsAction
} from "../actions";

describe("with an UPDATE_SEARCH action", () => {
  let newState: HeadlineState;

  beforeAll(() => {
    const initialState: HeadlineState = {
      selectedSearch: "",
      enteredSearchQuery: "",
      selectedCompanySymbols: []
    };
    const action: UpdateSearchAction = {
      type: UPDATE_SEARCH,
      payload: {
        companyName: "Apple Inc.",
        currency: "USD",
        primaryExchange: "NAS",
        sector: "Technology",
        symbol: "AAPL",
        name: "Apple"
      }
    };
    newState = headlineReducer(initialState, action);
  });

  it('it updates the search query to be "AA"', () => {
    expect(newState.selectedSearch).toEqual({
      companyName: "Apple Inc.",
      currency: "USD",
      primaryExchange: "NAS",
      sector: "Technology",
      symbol: "AAPL",
      name: "Apple"
    });
  });
});

describe("with an UPDATE_SEARCH_QUERY action", () => {
  let newState: HeadlineState;

  beforeAll(() => {
    const initialState: HeadlineState = {
      selectedSearch: "",
      enteredSearchQuery: "",
      selectedCompanySymbols: []
    };
    const action: UpdateSearchQueryAction = {
      type: UPDATE_SEARCH_QUERY,
      payload: "ECOR"
    };
    newState = headlineReducer(initialState, action);
  });

  it('it updates the search query to be "ECOR"', () => {
    expect(newState.enteredSearchQuery).toBe("ECOR");
  });
});

describe("with an UPDATE_COMPANY_SYMBOLS action", () => {
  let newState: HeadlineState;

  beforeAll(() => {
    const initialState: HeadlineState = {
      selectedSearch: "",
      enteredSearchQuery: "",
      selectedCompanySymbols: []
    };
    const action: UpdateCompanySymbolsAction = {
      type: UPDATE_COMPANY_SYMBOLS,
      payload: [{ symbol: "AAPL", name: "Apple Inc.", exchange: "NAS" }]
    };
    newState = headlineReducer(initialState, action);
  });

  it('it updates the company symbol array with Apple symbol, name and exchange"', () => {
    expect(newState.selectedCompanySymbols).toEqual([
      { symbol: "AAPL", name: "Apple Inc.", exchange: "NAS" }
    ]);
  });
});
