import { RESET } from "../../../store/constants";
import { UPDATE_LATEST_NEWS } from "./constants";
import { ILatestNews, LatestNewsActions } from "./actions";
import { Reducer } from "redux";

export interface LatestNewsState {
  selectedLatestNews: ILatestNews[] | null;
}

const initialState: LatestNewsState = {
  selectedLatestNews: null
};

export const latestNewsReducer: Reducer<LatestNewsState, LatestNewsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_LATEST_NEWS:
      return {
        ...state,
        selectedLatestNews: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
