import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export interface ChartData {
  close: number;
  date: string;
}

export type ChartRange = "1D" | "5D" | "1M" | "1Y" | "5Y" | "MAX";

export type UpdateChartRangeAction = ActionWithPayload<
  typeof UPDATE_CHART_RANGE,
  ChartRange
>;

export const updateChartRangeAction = (
  chartRange: ChartRange
): UpdateChartRangeAction => ({
  type: UPDATE_CHART_RANGE,
  payload: chartRange
});

export type UpdateChartDataAction = ActionWithPayload<
  typeof UPDATE_CHART_DATA,
  ChartData[]
>;

export const updateChartDataAction = (
  chartData: ChartData[]
): UpdateChartDataAction => ({
  type: UPDATE_CHART_DATA,
  payload: chartData
});

export type ChartActions =
  | UpdateChartDataAction
  | UpdateChartRangeAction
  | ResetAction;
