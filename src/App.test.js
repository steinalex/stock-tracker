import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combinedReducer } from "./store/reducer";
import { UPDATE_SELECTED_STOCK } from "./store/constants";

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
        selectedStock: "",
        selectedChartRange: "5y",
        selectedKeyStats: "",
        selectedLatestNews: null,
        selectedCompanyOverview: null,
        selectedTopPeers: null,
        selectedSearch: "",
        selectedCompanySymbols: [],
        selectedQuotes: "",
        selectedStockTicker: "",
        selectedChartData: null,
        enteredSearchQuery: ""
      };
    });

    // describe('and stock "AAPL" name is entered', () => {
    //   beforeEach(() => {
    //     newState = reducer(previousState, {
    //       type: UPDATE_SELECTED_STOCK,
    //       payload: "AAPL"
    //     });
    //   });
    //   it('it sets selectedStock to "AAPL"', () => {
    //     expect(newState.selectedStock).toBe("AAPL");
    //   });
    // });
  });
});
