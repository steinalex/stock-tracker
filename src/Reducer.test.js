import { UPDATE_SELECTED_STOCK } from "./store";
import { stockReducer } from "./reducer";

describe("with an UPDATE_SELECTED_STOCK action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      selectedStock: ""
    };
    const action = { type: UPDATE_SELECTED_STOCK, payload: "AAPL" };
    newState = stockReducer(initialState, action);
  });

  it('it updates the selected stock to "AAPL"', () => {
    expect(newState.selectedStock).toBe("AAPL");
  });
});
