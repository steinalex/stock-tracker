import { RESET, UPDATE_SELECTED_STOCK } from "./store/constants";
import { ActionCreator } from "./utils/actions";

export type ResetAction = ReturnType<typeof resetAction>;

export const resetAction = () => ({ type: RESET });

export type UpdateStockAction = ReturnType<typeof updateStockAction>;

export const updateStockAction: ActionCreator<
  typeof UPDATE_SELECTED_STOCK,
  string
> = selectedStock => ({
  type: UPDATE_SELECTED_STOCK,
  payload: selectedStock
});
