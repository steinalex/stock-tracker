import { combinedReducer } from "../reducer";

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

describe("Test combineReducer with an UNKNOWN action", () => {
  it("it should not change the state when an unknown/invalid action is provided", () => {
    const _init = createInitialState();
    const result = combinedReducer(_init, { type: "TEST__NOTHING" });
    expect(result).toBe(_init);
  });
});
