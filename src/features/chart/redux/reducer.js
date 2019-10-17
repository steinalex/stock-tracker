import {
  UPDATE_CHART_DATA,
  UPDATE_CHART_RANGE
} from "../../../store/constants";

const initialState = { selectedChartRange: "5y", selectedChartData: null };
export const chartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CHART_RANGE:
      return {
        ...state,
        selectedChartRange: payload
      };
    case UPDATE_CHART_DATA:
      return {
        ...state,
        selectedChartData: payload
      };
    default:
      return state;
  }
};