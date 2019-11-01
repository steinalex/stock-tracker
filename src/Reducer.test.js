import { combinedReducer, UPDATE_SELECTED_STOCK } from "./store";
import { UPDATE_COMPANY_OVERVIEW } from "./features/company/redux/constants";
import { UPDATE_LATEST_NEWS } from "./features/latest-news/redux/constants";
import { UPDATE_KEY_STATS } from "./features/key-stats/redux/constants";
import { UPDATE_TOP_PEERS } from "./features/peers/redux/constants";
import { UPDATE_STOCK_TICKER } from "./features/stock-ticker/redux/constants";

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
