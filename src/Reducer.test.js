import {
  combinedReducer,
  UPDATE_CHART_DATA,
  UPDATE_CHART_RANGE,
  UPDATE_COMPANY_OVERVIEW,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_KEY_STATS,
  UPDATE_LATEST_NEWS,
  UPDATE_SEARCH,
  UPDATE_SEARCH_QUERY,
  UPDATE_SELECTED_STOCK,
  UPDATE_STOCK_TICKER,
  UPDATE_TOP_PEERS
} from "./store";

const createInitialState = () => ({
  stockData: {
    selectedStock: "",
    selectedSearch: "",
    enteredSearchQuery: "",
    selectedCompanySymbols: []
  },
  referenceData: {
    selectedChartRange: "5y",
    selectedKeyStats: "",
    selectedLatestNews: null,
    selectedCompanyOverview: null,
    selectedTopPeers: null,
    selectedChartData: null,
    selectedStockTicker: ""
  }
});

describe('When the "Stock Reducer" is called', () => {
  describe("with an UNKNOWN action", () => {
    it("it should not change the state when an unknown/invalid action is provided", () => {
      const _init = createInitialState();
      const result = combinedReducer(_init, { type: "TEST__NOTHING" });
      expect(result).toBe(_init);
    });
  });

  describe("with an UPDATE_CHART_RANGE action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedChartRange: "5y" }
      };
      const action = { type: UPDATE_CHART_RANGE, payload: "2y" };
      newState = combinedReducer(initialState, action);
    });

    it("it updates the selected chart range to 2y", () => {
      expect(newState.referenceData.selectedChartRange).toBe("2y");
    });
  });

  describe("with an UPDATE_SELECTED_STOCK action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        stockData: { ..._init.stockData, selectedStock: "" }
      };
      const action = { type: UPDATE_SELECTED_STOCK, payload: "AAPL" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the selected stock to "AAPL"', () => {
      expect(newState.stockData.selectedStock).toBe("AAPL");
    });
  });

  describe("and UPDATE_SEARCH is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        stockData: { ..._init.stockData, selectedSearch: "" }
      };
      const action = { type: UPDATE_SEARCH, payload: "AA" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the search query to be "AA"', () => {
      expect(newState.stockData.selectedSearch).toBe("AA");
    });
  });

  describe("and UPDATE_SEARCH_QUERY is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        stockData: { ..._init.stockData, enteredSearchQuery: "" }
      };
      const action = { type: UPDATE_SEARCH_QUERY, payload: "ECOR" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the search query to be "ECOR"', () => {
      expect(newState.stockData.enteredSearchQuery).toBe("ECOR");
    });
  });

  describe("and UPDATE_COMPANY_SYMBOLS is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        stockData: { ..._init.stockData, selectedCompanySymbols: [] }
      };
      const action = {
        type: UPDATE_COMPANY_SYMBOLS,
        payload: ["AAPL", "AA"]
      };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the company symbol array with two elements "(AAPL, AA)"', () => {
      expect(newState.stockData.selectedCompanySymbols).toEqual(["AAPL", "AA"]);
    });
  });

  describe("and UPDATE_KEY_STATS is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedKeyStats: "" }
      };
      const action = { type: UPDATE_KEY_STATS, payload: "STATS" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the key statistics to "STATS"', () => {
      expect(newState.referenceData.selectedKeyStats).toBe("STATS");
    });
  });

  describe("and UPDATE_LATEST_NEWS is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedLatestNews: "" }
      };
      const action = { type: UPDATE_LATEST_NEWS, payload: "NEWS" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the latest news to "NEWS"', () => {
      expect(newState.referenceData.selectedLatestNews).toBe("NEWS");
    });
  });

  describe("and UPDATE_COMPANY_OVERVIEW is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedCompanyOverview: "" }
      };
      const action = { type: UPDATE_COMPANY_OVERVIEW, payload: "Apple Inc." };
      newState = combinedReducer(initialState, action);
    });

    it('it updates company overview to "Apple Inc."', () => {
      expect(newState.referenceData.selectedCompanyOverview).toEqual(
        "Apple Inc."
      );
    });
  });

  describe("and UPDATE_TOP_PEERS is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedTopPeers: "" }
      };
      const action = { type: UPDATE_TOP_PEERS, payload: "Peers" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates top peers to "Peers"', () => {
      expect(newState.referenceData.selectedTopPeers).toEqual("Peers");
    });
  });

  describe("and UPDATE_CHART_DATA is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedChartData: "" }
      };
      const action = { type: UPDATE_CHART_DATA, payload: "Chart Data" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the chart to "Chart Data"', () => {
      expect(newState.referenceData.selectedChartData).toEqual("Chart Data");
    });
  });

  describe("and UPDATE_STOCK_TICKER is called", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        referenceData: { ..._init.referenceData, selectedStockTicker: "" }
      };
      const action = { type: UPDATE_STOCK_TICKER, payload: "Stock" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates stock to "Stock"', () => {
      expect(newState.referenceData.selectedStockTicker).toEqual("Stock");
    });
  });
});
