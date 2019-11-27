import { createRpcClient, RpcClient } from "../rpcClient";

describe("rpcClient", () => {
  let socket: Pick<SocketIOClient.Socket, "on" | "off" | "emit">;
  let emit: jest.Mock;
  let on: jest.Mock;
  let off: jest.Mock;
  let client: RpcClient;

  beforeEach(() => {
    emit = jest.fn();
    on = jest.fn();
    off = jest.fn();
    socket = { emit, on, off };
    client = createRpcClient(socket, () => "REPLY");
  });

  test("should create an rpc client", () => {
    expect(typeof client).toBe("function");
  });

  describe("When making an RPC", () => {
    let promise: Promise<string>;

    beforeEach(() => {
      promise = client<string, string>("TOPIC", "ARG1");
    });

    test("should emit to - and subscribe to the correct socket.IO topic", () => {
      expect(emit).toHaveBeenCalledWith("TOPIC", "REPLY", "ARG1");
      expect(on.mock.calls[0][0]).toBe("REPLY");
    });

    test("should resolve the promise and stop the subscriptiopn when data is recieved", () => {
      expect(emit).toHaveBeenCalledWith("TOPIC", "REPLY", "ARG1");
      expect(on.mock.calls[0][0]).toBe("REPLY");
      on.mock.calls[0][1]({ status: "OK", data: "someData" });
      expect(off.mock.calls[0][0]).toBe("REPLY");
      return expect(promise).resolves.toBe("someData");
    });
  });
});
