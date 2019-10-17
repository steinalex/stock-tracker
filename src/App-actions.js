import { RESET, UPDATE_SELECTED_STOCK } from "./store/constants";

export const resetAction = () => ({ type: RESET });
export const updateStockAction = action => ({
  type: UPDATE_SELECTED_STOCK,
  payload: action
});
