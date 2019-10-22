import { UPDATE_SELECTED_STOCK, RESET } from "./store/constants";

const initialState = {
  selectedStock: undefined
};

export const stockReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SELECTED_STOCK:
      return {
        ...state,
        selectedStock: payload
      };
    case RESET:
      return { ...initialState, selectedStock: state.selectedStock };

    default:
      return state;
  }
};
