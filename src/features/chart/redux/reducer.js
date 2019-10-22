import {
  UPDATE_CHART_DATA,
  UPDATE_CHART_RANGE,
  RESET_CHART_DATA,
  RESET
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
    case RESET_CHART_DATA:
      return { ...state, selectedChartData: null };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
