import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export interface ChartData {
  close: number;
  date: string;
}

export type UpdateChartRangeAction = ActionWithPayload<
  UPDATE_CHART_RANGE,
  string
>;

export const updateChartRangeAction = (
  chartRange: string
): UpdateChartRangeAction => ({
  type: UPDATE_CHART_RANGE,
  payload: chartRange
});

export type UpdateChartDataAction = ActionWithPayload<
  UPDATE_CHART_DATA,
  ChartData[]
>;

export const updateChartDataAction = (
  chartData: []
): UpdateChartDataAction => ({
  type: UPDATE_CHART_DATA,
  payload: chartData
});

export type ChartActions =
  | UpdateChartDataAction
  | UpdateChartRangeAction
  | ResetAction;
