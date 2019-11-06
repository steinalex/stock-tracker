import { RESET } from "../../../store/constants";
import { UPDATE_COMPANY_OVERVIEW } from "./constants";
import { CompanyOverview, CompanyActions } from "./actions";
import { Reducer } from "redux";

export interface CompanyState {
  selectedCompanyOverview: CompanyOverview | null;
}

const initialState: CompanyState = {
  selectedCompanyOverview: null
};

export const companyOverviewReducer: Reducer<CompanyState, CompanyActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMPANY_OVERVIEW:
      return {
        ...state,
        selectedCompanyOverview: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
