import { chartMiddleware } from "../middleware";
import { updateChartRangeAction, updateChartDataAction } from "../actions";

jest.mock("services/socketService");

describe("When testing chart middleware", () => {
  let mockSocket: any;
  let socketService: any;
  let store: any;
  let next: jest.Mock;

  beforeEach(() => {
    mockSocket = {
      emit: jest.fn(),
      on: jest.fn()
    };

    socketService = {
      get: () => mockSocket
    };

    const state = { stockData: { selectedStock: { symbol: "AAPL" } } };

    store = {
      getState: jest.fn(() => state)
    };

    next = jest.fn();
  });

  // it('it should create a socket on for the chart data', () => {
  //     const action = updateChartDataAction([]);
  //     const middleware = chartMiddleware({ socketService });

  //     middleware(store)(next)(action);
  //     expect(mockSocket.on).toBeCalledWith([]);

  // })

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
