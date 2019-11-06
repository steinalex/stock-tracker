import { RESET, UPDATE_SELECTED_STOCK } from "./store/constants";

export type ResetAction = ReturnType<typeof resetAction>;

export const resetAction = () => ({ type: RESET });

export type UpdateStockAction = ReturnType<typeof updateStockAction>;

export const updateStockAction = (selectedStock: string) => ({
  type: UPDATE_SELECTED_STOCK,
  payload: selectedStock
});
