import { UPDATE_SELECTED_STOCK, RESET } from "./store/constants";
import { Reducer } from "redux";
import { UpdateStockAction } from "./actions";

export interface StockState {
  selectedStock: string | undefined;
}

const initialState: StockState = {
  selectedStock: undefined
};

export const stockReducer: Reducer<StockState, UpdateStockAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_SELECTED_STOCK:
      return {
        ...state,
        selectedStock: action.payload
      };
    case RESET:
      return { ...initialState, selectedStock: state.selectedStock };
    default:
      return state;
  }
};
