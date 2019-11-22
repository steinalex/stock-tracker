interface ErrorResult {
  status: "ERROR";
}

interface SuccessResult<T> {
  status: "OK";
  data: T;
}

type Result<T> = ErrorResult | SuccessResult<T>;
type REPLY_TO_TOPIC_GENERATOR = (requestTpoic: string) => string;

function createTopicName(service: string) {
  return service + Math.abs(Math.random() * 1000).toFixed(0);
}

export type RpcClient = <TResult, A>(
  topic: string,
  ...args: A[]
) => Promise<TResult>;

export const createRpcClient = (
  socket: Pick<SocketIOClient.Socket, "on" | "off" | "emit">,
  requestTopicGenerator: REPLY_TO_TOPIC_GENERATOR = createTopicName
) => <TResult, A>(topic: string, ...args: A[]) =>
  new Promise<TResult>((resolve, reject) => {
    const replyTo = requestTopicGenerator(topic);
    socket.emit(topic, replyTo, ...args);
    socket.on(replyTo, (result: Result<TResult>) => {
      socket.off(replyTo);
      result.status === "OK" ? resolve(result.data) : reject(result.status);
    });
  });
