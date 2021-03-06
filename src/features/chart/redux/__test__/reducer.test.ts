import { UPDATE_CHART_DATA, UPDATE_CHART_RANGE } from "../constants";
import { chartReducer, ChartState } from "../reducer";
import { UpdateChartRangeAction, UpdateChartDataAction } from "../actions";

describe("with an UPDATE_CHART_RANGE action", () => {
  let newState: ChartState;

  beforeAll(() => {
    const initialState: ChartState = {
      selectedChartRange: "1Y",
      selectedChartData: null
    };
    const action: UpdateChartRangeAction = {
      type: UPDATE_CHART_RANGE,
      payload: "5Y"
    };
    newState = chartReducer(initialState, action);
  });

  it("it updates the selected chart range to 5Y", () => {
    expect(newState.selectedChartRange).toBe("5Y");
  });
});

describe("with an UPDATE_CHART_DATA action", () => {
  let newState: ChartState;

  beforeAll(() => {
    const initialState: ChartState = {
      selectedChartData: null,
      selectedChartRange: "5Y"
    };
    const action: UpdateChartDataAction = {
      type: UPDATE_CHART_DATA,
      payload: [{ date: "2019-11-06", close: 6.87 }]
    };
    newState = chartReducer(initialState, action);
  });

  it('it updates the chart to "Chart Data"', () => {
    expect(newState.selectedChartData).toEqual([
      { date: "2019-11-06", close: 6.87 }
    ]);
  });
});
