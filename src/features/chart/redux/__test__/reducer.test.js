import { UPDATE_CHART_DATA, UPDATE_CHART_RANGE } from "../constants";
import { chartReducer } from "../reducer";

describe("with an UPDATE_CHART_RANGE action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      selectedChartRange: "5y"
    };
    const action = { type: UPDATE_CHART_RANGE, payload: "2y" };
    newState = chartReducer(initialState, action);
  });

  it("it updates the selected chart range to 2y", () => {
    expect(newState.selectedChartRange).toBe("2y");
  });
});

describe("with an UPDATE_CHART_DATA action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      selectedChartData: ""
    };
    const action = { type: UPDATE_CHART_DATA, payload: "Chart Data" };
    newState = chartReducer(initialState, action);
  });

  it('it updates the chart to "Chart Data"', () => {
    expect(newState.selectedChartData).toEqual("Chart Data");
  });
});
