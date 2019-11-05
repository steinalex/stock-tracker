interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
}

export interface ActionCreator<T extends string, P> {
  (...args: any[]): ActionWithPayload<T, P>;
}

// export const createAction = <Type extends string>(type: Type) => <Payload>(payload: Payload): ActionWithPayload<Type, Payload> => ({ type, payload });
