import { RESET } from "../../../store/constants";
import { UPDATE_STOCK_TICKER } from "./constants";
import { Reducer } from "redux";
import { IStockTicker, StockTickerActions } from "./actions";

export interface StockState {
  selectedStockTicker: IStockTicker | undefined;
}

const initialState: StockState = {
  selectedStockTicker: undefined
};

export const stockTickerReducer: Reducer<StockState, StockTickerActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_STOCK_TICKER:
      return {
        ...state,
        selectedStockTicker: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
