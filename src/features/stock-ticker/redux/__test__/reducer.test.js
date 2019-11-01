import { UPDATE_STOCK_TICKER } from "../constants";
import { stockTickerReducer } from "../reducer";

describe("with an UPDATE_STOCK_TICKER action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      selectedStockTicker: ""
    };
    const action = { type: UPDATE_STOCK_TICKER, payload: "Stock" };
    newState = stockTickerReducer(initialState, action);
  });

  it('it updates stock to "Stock"', () => {
    expect(newState.selectedStockTicker).toEqual("Stock");
  });
});
