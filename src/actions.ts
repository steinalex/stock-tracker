import { RESET, UPDATE_SELECTED_STOCK } from "./store/constants";
import { ISelectedSearch } from "./features/headline/redux/actions";

export type ResetAction = ReturnType<typeof resetAction>;

export const resetAction = () => ({ type: RESET });

export type UpdateStockAction = ReturnType<typeof updateStockAction>;

export const updateStockAction = (selectedStock: ISelectedSearch) => ({
  type: UPDATE_SELECTED_STOCK,
  payload: selectedStock
});
