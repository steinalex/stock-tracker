import { UPDATE_KEY_STATS } from "../../../store/constants";

const initialState = { selectedKeyStats: "" };
export const keyStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_KEY_STATS:
      return {
        ...state,
        selectedKeyStats: payload
      };
    default:
      return state;
  }
};
