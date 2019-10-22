import { UPDATE_LATEST_NEWS, RESET } from "../../../store/constants";

const initialState = { selectedLatestNews: null };
export const latestNewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_LATEST_NEWS:
      return {
        ...state,
        selectedLatestNews: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
