import {
  UPDATE_SEARCH,
  UPDATE_SEARCH_QUERY,
  UPDATE_COMPANY_SYMBOLS
} from "../constants";
import { headlineReducer } from "../reducer";

const createInitialState = {
  selectedSearch: "",
  enteredSearchQuery: "",
  selectedCompanySymbols: []
};
describe("with an UPDATE_SEARCH action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      ...createInitialState,
      selectedSearch: ""
    };
    const action = { type: UPDATE_SEARCH, payload: "AA" };
    newState = headlineReducer(initialState, action);
  });

  it('it updates the search query to be "AA"', () => {
    expect(newState.selectedSearch).toBe("AA");
  });
});

describe("with an UPDATE_SEARCH_QUERY action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      ...createInitialState,
      enteredSearchQuery: ""
    };
    const action = { type: UPDATE_SEARCH_QUERY, payload: "ECOR" };
    newState = headlineReducer(initialState, action);
  });

  it('it updates the search query to be "ECOR"', () => {
    expect(newState.enteredSearchQuery).toBe("ECOR");
  });
});

describe("with an UPDATE_COMPANY_SYMBOLS action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      ...createInitialState,
      selectedCompanySymbols: []
    };
    const action = {
      type: UPDATE_COMPANY_SYMBOLS,
      payload: ["AAPL", "AA"]
    };
    newState = headlineReducer(initialState, action);
  });

  it('it updates the company symbol array with two elements "(AAPL, AA)"', () => {
    expect(newState.selectedCompanySymbols).toEqual(["AAPL", "AA"]);
  });
});
