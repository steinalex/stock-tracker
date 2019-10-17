import { UPDATE_LATEST_NEWS } from "../../../store/constants";

const initialState = { selectedLatestNews: null };
export const latestNewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_LATEST_NEWS:
      return {
        ...state,
        selectedLatestNews: payload
      };
    default:
      return state;
  }
};
