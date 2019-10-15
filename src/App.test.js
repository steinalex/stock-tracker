import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combinedReducer } from "./store/reducer";
import {
  UPDATE_SELECTED_STOCK,
  UPDATE_SEARCH,
  UPDATE_QUOTES,
  UPDATE_SEARCH_QUERY,
  UPDATE_COMPANY_SYMBOLS,
  UPDATE_CHART_RANGE
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

  describe("upon initialization", () => {
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
      it("it sets selectedStock to an empty string", () => {
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
      it("it sets selectedSearch to an empty string", () => {
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
      it("it sets enteredSearchQuery to an empty string", () => {
        expect(newState.stockData.enteredSearchQuery).toBe("ECOR");
      });
    });

    describe("and UPDATE_COMPANY_SYMBOLS is called", () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, UPDATE_COMPANY_SYMBOLS);
      });
      it("it sets selectedCompanySymbolto an empty string", () => {
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
      it("it sets selectedCompanySymbolto an empty string", () => {
        expect(newState.stockData.selectedCompanySymbols).toEqual([
          "AAPL",
          "AA"
        ]);
      });
    });
  });

  describe("on entering data", () => {
    beforeEach(() => {
      previousState = {
        selectedChartRange: "5y", //Chart range
        selectedKeyStats: "", //Key stats table
        selectedLatestNews: null, //News
        selectedCompanyOverview: null, //Company information
        selectedTopPeers: null,
        selectedChartData: null,
        selectedStockTicker: ""
      };
    });

    describe('and chart range "1y" is entered', () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_CHART_RANGE,
          payload: "1y"
        });
      });
      it('it sets selectedChartRange to "1y"', () => {
        expect(newState.referenceData.selectedChartRange).toBe("1y");
      });
    });
  });
});
