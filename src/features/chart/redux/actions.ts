import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";
import { ActionCreator } from "../../../typescript/actions";

interface Chart {
  close: number;
  date: string;
}

export type UpdateChartRangeAction = ReturnType<typeof updateChartRangeAction>;

export const updateChartRangeAction: ActionCreator<
  typeof UPDATE_CHART_RANGE,
  string
> = chartRange => ({
  type: UPDATE_CHART_RANGE,
  payload: chartRange
});

export type UpdateChartDataAction = ReturnType<typeof updateChartDataAction>;

export const updateChartDataAction: ActionCreator<
  typeof UPDATE_CHART_DATA,
  Chart[]
> = chartData => ({
  type: UPDATE_CHART_DATA,
  payload: chartData
});
