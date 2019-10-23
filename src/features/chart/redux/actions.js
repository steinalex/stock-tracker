import {
  UPDATE_CHART_RANGE,
  UPDATE_CHART_DATA
} from "../../../store/constants";

export const updateChartAction = action => ({
  type: UPDATE_CHART_RANGE,
  payload: action
});

export const updateChartDataAction = action => ({
  type: UPDATE_CHART_DATA,
  payload: action
});
