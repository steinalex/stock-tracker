import { UPDATE_COMPANY_OVERVIEW } from "../constants";
import { companyOverviewReducer } from "../reducer";

const createInitialState = { selectedCompanyOverview: null };
describe("with an UPDATE_COMPANY_OVERVIEW action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      ...createInitialState,
      selectedCompanyOverview: ""
    };
    const action = { type: UPDATE_COMPANY_OVERVIEW, payload: "Apple Inc." };
    newState = companyOverviewReducer(initialState, action);
  });

  it('it updates company overview to "Apple Inc."', () => {
    expect(newState.selectedCompanyOverview).toEqual("Apple Inc.");
  });
});
