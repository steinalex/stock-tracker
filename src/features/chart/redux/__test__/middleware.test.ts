import { chartMiddleware } from "../middleware";
import { updateChartRangeAction, ChartData } from "../actions";
import { BOOTSTRAP } from "store";

jest.mock("services/socketService");

describe("When testing chart middleware", () => {
  let mockSocket: any;
  let socketService: any;
  let store: any;
  let next: jest.Mock;

  beforeEach(() => {
    const payload = [{ close: 1, date: "1" }];
    mockSocket = {
      emit: jest.fn(),
      on: jest.fn((name: string, callback: (payload: ChartData[]) => void) => {
        callback(payload);
      })
    };

    socketService = {
      get: () => mockSocket
    };

    const state = { stockData: { selectedStock: { symbol: "AAPL" } } };

    store = {
      getState: jest.fn(() => state),
      dispatch: jest.fn()
    };

    next = jest.fn();
  });

  it("it should create a websocket for the chart data on startup", () => {
    const action = { type: BOOTSTRAP };
    const middleware = chartMiddleware({ socketService });
    middleware(store)(next)(action);

    expect(mockSocket.on).toHaveBeenCalledWith("chartData", expect.anything());
  });

  it("it should dispatch chart data to the store", () => {
    const action = { type: BOOTSTRAP };
    const middleware = chartMiddleware({ socketService });
    const updateAction = {
      payload: [{ close: 1, date: "1" }],
      type: "UPDATE_CHART_DATA"
    };
    middleware(store)(next)(action);

    expect(store.dispatch).toHaveBeenCalledWith(updateAction);
  });

  it('it should emit a stock of "AAPL" and a chart range of "1Y"', () => {
    const action = updateChartRangeAction("1Y");
    const middleware = chartMiddleware({ socketService });

    middleware(store)(next)(action);

    expect(mockSocket.emit).toBeCalledWith("timeRange", "AAPL", "1Y");
  });

  it("it should call next middleware in the chain", () => {
    const action = updateChartRangeAction("1Y");
    const middleware = chartMiddleware({ socketService });

    middleware(store)(next)(action);

    expect(next).toBeCalledWith(action);
  });
});
