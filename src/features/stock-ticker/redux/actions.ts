import { UPDATE_STOCK_TICKER } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export type UpdateStockTickerAction = ActionWithPayload<
  UPDATE_STOCK_TICKER,
  IStockTicker
>;

export interface IStockTicker {
  latestPrice: number;
  latestUpdate: number;
  change: number;
  changePercent: number;
}

export const updateStockTickerAction = (
  stockTicker: IStockTicker
): UpdateStockTickerAction => ({
  type: UPDATE_STOCK_TICKER,
  payload: stockTicker
});

export type StockTickerActions = UpdateStockTickerAction | ResetAction;
