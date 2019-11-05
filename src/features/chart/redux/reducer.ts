import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA, RESET } from "./constants";
import { ChartActions } from "./actions";

export type ChartState = {
  selectedChartRange: string;
  selectedChartData: any[] | null; // TODO: Create proper structure
};
export type ResetAction = {
  type: typeof RESET;
  payload?: {};
};

const initialState = { selectedChartRange: "5y", selectedChartData: null };
export const chartReducer = (
  state: ChartState = initialState,
  { type, payload }: ChartActions | ResetAction
) => {
  switch (type) {
    case UPDATE_CHART_RANGE:
      return {
        ...state,
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
