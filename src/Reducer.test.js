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
    beforeAll(() => {
      previousState = {
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
      };
    });

    describe("and UPDATE_SELECTED_STOCK is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_SELECTED_STOCK);
      });
      it("it checks if selected stock is an empty string", () => {
        expect(newState.stockData.selectedStock).toBe("");
      });
    });

    describe("and UPDATE_SEARCH is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_SEARCH);
      });
      it("it checks if selected search is an empty string", () => {
        expect(newState.stockData.selectedSearch).toBe("");
      });
    });

    describe("and UPDATE_SEARCH_QUERY is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_SEARCH_QUERY);
      });
      it("it checks if the entered search query is an empty string", () => {
        expect(newState.stockData.enteredSearchQuery).toBe("");
      });
    });

    describe("and UPDATE_COMPANY_SYMBOLS is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_COMPANY_SYMBOLS);
      });
      it("it checks if the company symbols array is empty", () => {
        expect(newState.stockData.selectedCompanySymbols).toEqual([]);
      });
    });

    describe("and UPDATE_KEY_STATS is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_KEY_STATS);
      });
      it("it checks if the key statistics is an empty string", () => {
        expect(newState.referenceData.selectedKeyStats).toBe("");
      });
    });

    describe("and UPDATE_LATEST_NEWS is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_LATEST_NEWS);
      });
      it("it checks that latest news is set to null", () => {
        expect(newState.referenceData.selectedLatestNews).toBe(null);
      });
    });

    describe("and UPDATE_COMPANY_OVERVIEW is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_COMPANY_OVERVIEW);
      });
      it("it checks if company overview is set to null", () => {
        expect(newState.referenceData.selectedCompanyOverview).toEqual(null);
      });
    });

    describe("and UPDATE_TOP_PEERS is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_TOP_PEERS);
      });
      it("it sets checks if top peers is set to null", () => {
        expect(newState.referenceData.selectedTopPeers).toEqual(null);
      });
    });

    describe("and UPDATE_STOCK_TICKER is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_STOCK_TICKER);
      });
      it("it checks if stock ticker is an empty string", () => {
        expect(newState.referenceData.selectedStockTicker).toEqual("");
      });
    });

    describe("and UPDATE_CHART_DATA is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_CHART_DATA);
      });
      it("it checks if chart data is set to null", () => {
        expect(newState.referenceData.selectedChartData).toEqual(null);
      });
    });

    describe("and UPDATE_CHART_Range is called", () => {
      beforeAll(() => {
        newState = combinedReducer(previousState, UPDATE_CHART_RANGE);
      });
      it("it checks if the default chart range is set to 5y", () => {
        expect(newState.referenceData.selectedChartRange).toEqual("5y");
      });
    });

    describe("and UPDATE_CHART_RANGE is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedChartRange: "5y" } };
        const action = { type: UPDATE_CHART_RANGE, payload: "2y" };
        newState = combinedReducer(initialState, action);
      });

      it('it checks if the chart range can be updated to "2y"', () => {
        expect(newState.referenceData.selectedChartRange).toBe("2y");
      });
    });

    describe("and UPDATE_SELECTED_STOCK is called", () => {
      beforeAll(() => {
        const initialState = { stockData: { selectedStock: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_SELECTED_STOCK,
          payload: "AAPL"
        });
      });
      it('it checks if stock can be updated to "AAPL"', () => {
        expect(newState.stockData.selectedStock).toBe("AAPL");
      });
    });

    describe("and UPDATE_SEARCH is called", () => {
      beforeAll(() => {
        const initialState = { stockData: { selectedSearch: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_SEARCH,
          payload: "AA"
        });
      });
      it('it checks if entered search can be set to "AA"', () => {
        expect(newState.stockData.selectedSearch).toBe("AA");
      });
    });

    describe("and UPDATE_SEARCH_QUERY is called", () => {
      beforeAll(() => {
        const initialState = { stockData: { enteredSearchQuery: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_SEARCH_QUERY,
          payload: "ECOR"
        });
      });
      it('it checks if the search query can be updated to "ECOR"', () => {
        expect(newState.stockData.enteredSearchQuery).toBe("ECOR");
      });
    });

    describe("and UPDATE_COMPANY_SYMBOLS is called", () => {
      beforeAll(() => {
        const initialState = { stockData: { selectedCompanySymbols: [] } };
        newState = combinedReducer(initialState, {
          type: UPDATE_COMPANY_SYMBOLS,
          payload: ["AAPL", "AA"]
        });
      });
      it('it checks if the company symbol array is filled with two elements "(AAPL, AA)"', () => {
        expect(newState.stockData.selectedCompanySymbols).toEqual([
          "AAPL",
          "AA"
        ]);
      });
    });

    describe("and UPDATE_KEY_STATS is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedKeyStats: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_KEY_STATS,
          payload: "STATS"
        });
      });
      it('it checks if the key statistics data is updated to "STATS"', () => {
        expect(newState.referenceData.selectedKeyStats).toBe("STATS");
      });
    });

    describe("and UPDATE_LATEST_NEWS is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedLatestNews: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_LATEST_NEWS,
          payload: "NEWS"
        });
      });
      it('it checks if latest news data can be updated to "NEWS"', () => {
        expect(newState.referenceData.selectedLatestNews).toBe("NEWS");
      });
    });

    describe("and UPDATE_COMPANY_OVERVIEW is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedCompanyOverview: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_COMPANY_OVERVIEW,
          payload: "Apple Inc."
        });
      });
      it('it checks if company overview can be updated to "Apple Inc."', () => {
        expect(newState.referenceData.selectedCompanyOverview).toEqual(
          "Apple Inc."
        );
      });
    });

    describe("and UPDATE_TOP_PEERS is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedTopPeers: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_TOP_PEERS,
          payload: "Peers"
        });
      });
      it('it checks if top peers data can be updated to "Peers"', () => {
        expect(newState.referenceData.selectedTopPeers).toEqual("Peers");
      });
    });

    describe("and UPDATE_CHART_DATA is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedChartData: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_CHART_DATA,
          payload: "Chart Data"
        });
      });
      it('it check if the chart data can be update to "Chart Data"', () => {
        expect(newState.referenceData.selectedChartData).toEqual("Chart Data");
      });
    });

    describe("and UPDATE_STOCK_TICKER is called", () => {
      beforeAll(() => {
        const initialState = { referenceData: { selectedStockTicker: "" } };
        newState = combinedReducer(initialState, {
          type: UPDATE_STOCK_TICKER,
          payload: "Stock"
        });
      });
      it('it checks if stock data can be update to "Stock"', () => {
        expect(newState.referenceData.selectedStockTicker).toEqual("Stock");
      });
    });
  });
});
