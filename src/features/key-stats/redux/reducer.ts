import { RESET } from "../../../store/constants";
import { UPDATE_KEY_STATS } from "./constants";
import { Reducer } from "redux";
import { KeyStatsActions, IKeyStats } from "./actions";

export interface KeyStatsState {
  selectedKeyStats: IKeyStats | null;
}

const initialState: KeyStatsState = {
  selectedKeyStats: null
};

export const keyStatsReducer: Reducer<KeyStatsState, KeyStatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_KEY_STATS:
      return {
        ...state,
        selectedKeyStats: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
