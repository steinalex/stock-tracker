import { RESET } from "../../../store/constants";
import { UPDATE_STOCK_TICKER } from "./constants";
import { Reducer } from "redux";

const initialState = { selectedStockTicker: "" };

export const stockTickerReducer: Reducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_STOCK_TICKER:
      return {
        ...state,
        selectedStockTicker: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
