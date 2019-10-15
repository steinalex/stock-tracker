import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { reducer } from "./store/reducer";

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

    describe('and a stock "AAPL" name is entered', () => {
      beforeEach(() => {
        newState = reducer(previousState, "UPDATE_CHART_RANGE");
      });
      it("it sets selectedStock to the entered name", () => {
        expect(newState.selectedStock).toBe("");
      });
    });
  });
});
