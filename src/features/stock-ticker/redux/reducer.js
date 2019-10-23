import { UPDATE_STOCK_TICKER, RESET } from "../../../store/constants";

const initialState = { selectedStockTicker: "" };
export const stockTickerReducer = (state = initialState, { type, payload }) => {
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
