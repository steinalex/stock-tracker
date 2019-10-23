import { UPDATE_COMPANY_OVERVIEW, RESET } from "../../../store/constants";

const initialState = { selectedCompanyOverview: null };
export const companyOverviewReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_COMPANY_OVERVIEW:
      return {
        ...state,
        selectedCompanyOverview: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
