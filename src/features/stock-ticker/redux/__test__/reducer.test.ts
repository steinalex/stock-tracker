import { UPDATE_STOCK_TICKER } from "../constants";
import { stockTickerReducer, StockState } from "../reducer";
import { UpdateStockTickerAction } from "../actions";

describe("with an UPDATE_STOCK_TICKER action", () => {
  let newState: StockState;

  beforeAll(() => {
    const initialState: StockState = {
      selectedStockTicker: undefined
    };
    const action: UpdateStockTickerAction = {
      type: UPDATE_STOCK_TICKER,
      payload: {
        latestPrice: 5,
        latestUpdate: new Date("2019-11-19"),
        change: 8,
        changePercent: 7
      }
    };
    newState = stockTickerReducer(initialState, action);
  });

  it("it updates stock to Apple stock data", () => {
    expect(newState.selectedStockTicker).toEqual({
      latestPrice: 5,
      latestUpdate: new Date("2019-11-19"),
      change: 8,
      changePercent: 7
    });
  });
});
