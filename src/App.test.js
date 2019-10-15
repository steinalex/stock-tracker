import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combinedReducer } from "./store/reducer";
import { UPDATE_SELECTED_STOCK, UPDATE_CHART_RANGE } from "./store/constants";

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

    // describe("and UPDATE_CHART_RANGE is called", () => {
    //   beforeEach(() => {
    //     newState = combinedReducer(previousState, UPDATE_CHART_RANGE);
    //   });
    //   it("it sets selectedChartRange to 5y", () => {
    //     expect(newState.referenceData.selectedChartRange).toBe("5y");
    //   });
    // });
  });

  describe("on entering data", () => {
    beforeEach(() => {
      previousState = {
        selectedStock: "", //Stock returned
        selectedChartRange: "5y", //Chart range
        selectedSearch: "", //Stock entered
        enteredSearchQuery: "", //Stock entered
        selectedCompanySymbols: [], //All symbols from server
        selectedKeyStats: "", //Key stats table
        selectedLatestNews: null, //News
        selectedCompanyOverview: null, //Company information
        selectedTopPeers: null,
        selectedChartData: null,
        selectedStockTicker: ""
      };
    });

    describe('and stock "AAPL" name is entered', () => {
      beforeEach(() => {
        newState = combinedReducer(previousState, {
          type: UPDATE_SELECTED_STOCK,
          payload: "AAPL"
        });
      });
      it('it sets selectedStock to "AAPL"', () => {
        expect(newState.stockData.selectedStock).toBe("AAPL");
      });
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
