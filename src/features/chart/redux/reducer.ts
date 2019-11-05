import { RESET } from "../../../store/constants";
import { UPDATE_CHART_RANGE, UPDATE_CHART_DATA } from "./constants";
import { UpdateChartDataAction, UpdateChartRangeAction } from "./actions";
import { Reducer } from "react";

interface Chart {
  close: number;
  date: string;
}

interface ChartState {
  selectedChartRange: string;
  selectedChartData: null | Chart[];
}

const initialState: ChartState = {
  selectedChartRange: "5y",
  selectedChartData: null
};

export const chartReducer: Reducer<
  ChartState,
  UpdateChartDataAction | UpdateChartRangeAction
> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHART_RANGE:
      return {
        ...state,
        selectedChartRange: action.payload,
        selectedChartData: null
      };
    case UPDATE_CHART_DATA:
      return {
        ...state,
        selectedChartData: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
