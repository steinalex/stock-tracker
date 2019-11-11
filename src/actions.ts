import { RESET, UPDATE_SELECTED_STOCK } from "./store/constants";
import { ISelectedOption } from "./features/search/components/Search";

export type ResetAction = ReturnType<typeof resetAction>;

export const resetAction = () => ({ type: RESET });

export type UpdateStockAction = ReturnType<typeof updateStockAction>;

export const updateStockAction = (selectedStock: ISelectedOption) => ({
  type: UPDATE_SELECTED_STOCK,
  payload: selectedStock
});
