import { UPDATE_COMPANY_OVERVIEW } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export type UpdateCompanyOverviewAction = ActionWithPayload<
  UPDATE_COMPANY_OVERVIEW,
  CompanyOverview
>;

export interface CompanyOverview {
  website: string;
  description: string;
  symbol: string;
  companyName: string;
}

export const updateCompanyOverviewAction = (
  companyOverview: CompanyOverview
): UpdateCompanyOverviewAction => ({
  type: UPDATE_COMPANY_OVERVIEW,
  payload: companyOverview
});

export type CompanyActions = UpdateCompanyOverviewAction | ResetAction;
