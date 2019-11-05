import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";

export type UpdateChartRangeAction = {
  type: typeof UPDATE_CHART_RANGE;
  payload: { chartRange: string };
};

export type UpdateChartDataAction = {
  type: typeof UPDATE_CHART_DATA;
  payload: { chartData: string };
};

export type ChartActions = UpdateChartRangeAction | UpdateChartDataAction;

export const updateChartAction = (chartRange: string) => ({
  type: UPDATE_CHART_RANGE,
  payload: chartRange
});

export const updateChartDataAction = (chartData: string) => ({
  type: UPDATE_CHART_DATA,
  payload: chartData
});
