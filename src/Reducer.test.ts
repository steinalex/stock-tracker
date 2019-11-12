import { UPDATE_SELECTED_STOCK } from "./store";
import { stockReducer, StockState } from "./reducer";
import { UpdateStockAction } from "./actions";

describe("with an UPDATE_SELECTED_STOCK action", () => {
  let newState: StockState;

  beforeAll(() => {
    const initialState: StockState = {
      selectedStock: undefined
    };
    const action: UpdateStockAction = {
      type: UPDATE_SELECTED_STOCK,
      payload: { symbol: "AAPL", name: "Apple Inc." }
    };
    newState = stockReducer(initialState, action);
  });

  it('it updates the selected stock to "AAPL"', () => {
    expect(newState.selectedStock).toEqual({
      symbol: "AAPL",
      name: "Apple Inc."
    });
  });
});
