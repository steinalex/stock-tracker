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
    selectedStock: ""
  },
  headlineData: {
    selectedSearch: "",
    enteredSearchQuery: "",
    selectedCompanySymbols: []
  },
  chartData: {
    selectedChartRange: "5y",
    selectedChartData: null
  },
  keyStatsData: {
    selectedKeyStats: ""
  },
  latestNewsData: {
    selectedLatestNews: null
  },
  companyOverviewData: {
    selectedCompanyOverview: null
  },
  peerData: {
    selectedTopPeers: null
  },
  stockTickerData: {
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
        chartData: { ..._init.chartData, selectedChartRange: "5y" }
      };
      const action = { type: UPDATE_CHART_RANGE, payload: "2y" };
      newState = combinedReducer(initialState, action);
    });

    it("it updates the selected chart range to 2y", () => {
      expect(newState.chartData.selectedChartRange).toBe("2y");
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

  describe("with an UPDATE_SEARCH action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        headlineData: { ..._init.headlineData, selectedSearch: "" }
      };
      const action = { type: UPDATE_SEARCH, payload: "AA" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the search query to be "AA"', () => {
      expect(newState.headlineData.selectedSearch).toBe("AA");
    });
  });

  describe("with an UPDATE_SEARCH_QUERY action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        headlineData: { ..._init.headlineData, enteredSearchQuery: "" }
      };
      const action = { type: UPDATE_SEARCH_QUERY, payload: "ECOR" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the search query to be "ECOR"', () => {
      expect(newState.headlineData.enteredSearchQuery).toBe("ECOR");
    });
  });

  describe("with an UPDATE_COMPANY_SYMBOLS action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        headlineData: { ..._init.headlineData, selectedCompanySymbols: [] }
      };
      const action = {
        type: UPDATE_COMPANY_SYMBOLS,
        payload: ["AAPL", "AA"]
      };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the company symbol array with two elements "(AAPL, AA)"', () => {
      expect(newState.headlineData.selectedCompanySymbols).toEqual([
        "AAPL",
        "AA"
      ]);
    });
  });

  describe("with an UPDATE_KEY_STATS action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        keyStatsData: { ..._init.keyStatsData, selectedKeyStats: "" }
      };
      const action = { type: UPDATE_KEY_STATS, payload: "STATS" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the key statistics to "STATS"', () => {
      expect(newState.keyStatsData.selectedKeyStats).toBe("STATS");
    });
  });

  describe("with an UPDATE_LATEST_NEWS action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        latestNewsData: { ..._init.latestNewsData, selectedLatestNews: "" }
      };
      const action = { type: UPDATE_LATEST_NEWS, payload: "NEWS" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the latest news to "NEWS"', () => {
      expect(newState.latestNewsData.selectedLatestNews).toBe("NEWS");
    });
  });

  describe("with an UPDATE_COMPANY_OVERVIEW action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        companyOverviewData: {
          ..._init.companyOverviewData,
          selectedCompanyOverview: ""
        }
      };
      const action = { type: UPDATE_COMPANY_OVERVIEW, payload: "Apple Inc." };
      newState = combinedReducer(initialState, action);
    });

    it('it updates company overview to "Apple Inc."', () => {
      expect(newState.companyOverviewData.selectedCompanyOverview).toEqual(
        "Apple Inc."
      );
    });
  });

  describe("with an UPDATE_TOP_PEERS action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        peerData: { ..._init.peerData, selectedTopPeers: "" }
      };
      const action = { type: UPDATE_TOP_PEERS, payload: "Peers" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates top peers to "Peers"', () => {
      expect(newState.peerData.selectedTopPeers).toEqual("Peers");
    });
  });

  describe("with an UPDATE_CHART_DATA action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        chartData: { ..._init.chartData, selectedChartData: "" }
      };
      const action = { type: UPDATE_CHART_DATA, payload: "Chart Data" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates the chart to "Chart Data"', () => {
      expect(newState.chartData.selectedChartData).toEqual("Chart Data");
    });
  });

  describe("with an UPDATE_STOCK_TICKER action", () => {
    let newState;

    beforeAll(() => {
      const _init = createInitialState();
      const initialState = {
        ..._init,
        stockTickerData: { ..._init.stockTickerData, selectedStockTicker: "" }
      };
      const action = { type: UPDATE_STOCK_TICKER, payload: "Stock" };
      newState = combinedReducer(initialState, action);
    });

    it('it updates stock to "Stock"', () => {
      expect(newState.stockTickerData.selectedStockTicker).toEqual("Stock");
    });
  });
});
