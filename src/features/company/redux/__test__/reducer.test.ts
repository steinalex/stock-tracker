import { UPDATE_COMPANY_OVERVIEW } from "../constants";
import { companyOverviewReducer, CompanyState } from "../reducer";
import { UpdateCompanyOverviewAction } from "../actions";

describe("with an UPDATE_COMPANY_OVERVIEW action", () => {
  let newState: CompanyState;

  beforeAll(() => {
    const initialState: CompanyState = {
      selectedCompanyOverview: null
    };
    const action: UpdateCompanyOverviewAction = {
      type: UPDATE_COMPANY_OVERVIEW,
      payload: {
        website: "www.apple.com",
        companyName: "Apple Inc.",
        symbol: "AAPL",
        description: "Overpriced tech"
      }
    };
    newState = companyOverviewReducer(initialState, action);
  });

  it('it updates the company overview to "Apple Inc."', () => {
    expect(newState.selectedCompanyOverview).toEqual({
      website: "www.apple.com",
      companyName: "Apple Inc.",
      symbol: "AAPL",
      description: "Overpriced tech"
    });
  });
});
