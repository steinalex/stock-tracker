import { UPDATE_COMPANY_OVERVIEW } from "../../../store/constants";

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
    default:
      return state;
  }
};
