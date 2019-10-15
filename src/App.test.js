import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combinedReducer } from "./store/reducer";
import {
  UPDATE_SELECTED_STOCK,
  UPDATE_SEARCH,
  UPDATE_SEARCH_QUERY,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_CHART_RANGE,
  UPDATE_KEY_STATS,
  UPDATE_LATEST_NEWS,
  UPDATE_COMPANY_OVERVIEW,
  UPDATE_TOP_PEERS,
  UPDATE_CHART_DATA,
  UPDATE_STOCK_TICKER
} from "./store/constants";

// import { store } from "./store/store";
// import { Provider } from "react-redux";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Provider store={store}><App /></Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("Stock reducer", () => {
  let previousState;
  let newState;

  describe("on reducer call", () => {
    beforeEach(() => {
      previousState = {
        selectedStock: "",
        selectedSearch: "",
        selectedQuotes: "",
        enteredSearchQuery: "",
        selectedCompanySymbols: []
      };
    });

    describe("and UPDATE_SELECTED_STOCK is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_SELECTED_STOCK);
      });
      it("it sets selectedStock to an empty string", () => {
        expect(newState.stockData.selectedStock).toBe("");
      });
    });

    describe("and UPDATE_SELECTED_STOCK is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_SELECTED_STOCK,
          payload: "AAPL"
        });
      });
      it('it sets selectedStock to be "AAPL"', () => {
        expect(newState.stockData.selectedStock).toBe("AAPL");
      });
    });

    describe("and UPDATE_SEARCH is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_SEARCH);
      });
      it("it sets selectedSearch to an empty string", () => {
        expect(newState.stockData.selectedSearch).toBe("");
      });
    });

    describe("and UPDATE_SEARCH is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_SEARCH,
          payload: "AA"
        });
      });
      it('it sets selectedSearch to be "AA"', () => {
        expect(newState.stockData.selectedSearch).toBe("AA");
      });
    });

    describe("and UPDATE_SEARCH_QUERY is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_SEARCH_QUERY);
      });
      it("it sets enteredSearchQuery to an empty string", () => {
        expect(newState.stockData.enteredSearchQuery).toBe("");
      });
    });

    describe("and UPDATE_SEARCH_QUERY is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_SEARCH_QUERY,
          payload: "ECOR"
        });
      });
      it('it sets enteredSearchQuery to "ECOR"', () => {
        expect(newState.stockData.enteredSearchQuery).toBe("ECOR");
      });
    });

    describe("and UPDATE_COMPANY_SYMBOLS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_COMPANY_SYMBOLS);
      });
      it("it sets selectedCompanySymbols to an empty array", () => {
        expect(newState.stockData.selectedCompanySymbols).toEqual([]);
      });
    });

    describe("and UPDATE_COMPANY_SYMBOLS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_COMPANY_SYMBOLS,
          payload: ["AAPL", "AA"]
        });
      });
      it("it sets selectedCompanySymbols an array of two elements", () => {
        expect(newState.stockData.selectedCompanySymbols).toEqual([
          "AAPL",
          "AA"
        ]);
      });
    });
  });

  describe("on componentReducer call", () => {
    beforeEach(() => {
      previousState = {
        selectedChartRange: "5y",
        selectedKeyStats: "",
        selectedLatestNews: null,
        selectedCompanyOverview: null,
        selectedTopPeers: null,
        selectedChartData: null,
        selectedStockTicker: ""
      };
    });

    describe("and UPDATE_CHART_RANGE is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_CHART_RANGE);
      });
      it('it sets selectedChartRange to "5y"', () => {
        expect(newState.referenceData.selectedChartRange).toBe("5y");
      });
    });

    describe("and UPDATE_CHART_RANGE is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_CHART_RANGE,
          payload: "1y"
        });
      });
      it('it sets selectedChartRange to be "1y"', () => {
        expect(newState.referenceData.selectedChartRange).toBe("1y");
      });
    });

    describe("and UPDATE_KEY_STATS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_KEY_STATS);
      });
      it("it sets selectedKeyStats to an empty string", () => {
        expect(newState.referenceData.selectedKeyStats).toBe("");
      });
    });

    describe("and UPDATE_KEY_STATS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_KEY_STATS,
          payload: "STATS"
        });
      });
      it('it sets selectedKeyStats to be "STATS"', () => {
        expect(newState.referenceData.selectedKeyStats).toBe("STATS");
      });
    });

    describe("and UPDATE_LATEST_NEWS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_LATEST_NEWS);
      });
      it("it sets selectedLatestNews to be null", () => {
        expect(newState.referenceData.selectedLatestNews).toBe(null);
      });
    });

    describe("and UPDATE_LATEST_NEWS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_LATEST_NEWS,
          payload: "NEWS"
        });
      });
      it('it sets selectedLatestNews to "NEWS"', () => {
        expect(newState.referenceData.selectedLatestNews).toBe("NEWS");
      });
    });

    describe("and UPDATE_COMPANY_OVERVIEW is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_COMPANY_OVERVIEW);
      });
      it("it sets selectedCompanyOverview to null", () => {
        expect(newState.referenceData.selectedCompanyOverview).toEqual(null);
      });
    });

    describe("and UPDATE_COMPANY_OVERVIEW is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_COMPANY_OVERVIEW,
          payload: "Apple Inc."
        });
      });
      it('it sets selectedCompanyOverview to "Apple Inc."', () => {
        expect(newState.referenceData.selectedCompanyOverview).toEqual(
          "Apple Inc."
        );
      });
    });

    describe("and UPDATE_TOP_PEERS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_TOP_PEERS);
      });
      it("it sets selectedTopPeers to null", () => {
        expect(newState.referenceData.selectedTopPeers).toEqual(null);
      });
    });

    describe("and UPDATE_TOP_PEERS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_TOP_PEERS,
          payload: "Peers"
        });
      });
      it('it sets selectedTopPeers to "Peers"', () => {
        expect(newState.referenceData.selectedTopPeers).toEqual("Peers");
      });
    });

    describe("and UPDATE_CHART_DATA is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_CHART_DATA);
      });
      it("it sets selectedChartData to null", () => {
        expect(newState.referenceData.selectedChartData).toEqual(null);
      });
    });

    describe("and UPDATE_CHART_DATA is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_CHART_DATA,
          payload: "Chart Data"
        });
      });
      it('it sets selectedChartData to "Chart Data"', () => {
        expect(newState.referenceData.selectedChartData).toEqual("Chart Data");
      });
    });

    describe("and UPDATE_STOCK_TICKER is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_STOCK_TICKER);
      });
      it("it sets selectedStockTicker to an empty string", () => {
        expect(newState.referenceData.selectedStockTicker).toEqual("");
      });
    });

    describe("and UPDATE_STOCK_TICKER is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_STOCK_TICKER,
          payload: "Stock"
        });
      });
      it('it sets selectedStockTicker to "Chart Data"', () => {
        expect(newState.referenceData.selectedStockTicker).toEqual("Stock");
      });
    });
  });
});
