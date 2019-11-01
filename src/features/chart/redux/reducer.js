import { RESET } from "../../../store/constants";
import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";

const initialState = { selectedChartRange: "5y", selectedChartData: null };
export const chartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CHART_RANGE:
      return {
        selectedChartRange: payload,
        selectedChartData: null
      };
    case UPDATE_CHART_DATA:
      return {
        ...state,
        selectedChartData: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
