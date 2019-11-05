import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";
import { ActionCreator, ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export interface ChartData {
  close: number;
  date: string;
}

export const updateChartRangeAction: ActionCreator<
  typeof UPDATE_CHART_RANGE,
  string
> = chartRange => ({
  type: UPDATE_CHART_RANGE,
  payload: chartRange
});

export type UpdateChartRangeAction = ActionWithPayload<
  UPDATE_CHART_RANGE,
  string
>;

export const updateChartDataAction: ActionCreator<
  typeof UPDATE_CHART_DATA,
  ChartData[]
> = chartData => ({
  type: UPDATE_CHART_DATA,
  payload: chartData
});

export type UpdateChartDataAction = ActionWithPayload<
  UPDATE_CHART_DATA,
  ChartData[]
>;

export type ChartActions =
  | UpdateChartDataAction
  | UpdateChartRangeAction
  | ResetAction;
