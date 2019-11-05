export type ActionWithPayload<T, P> = Action<T> & {
  payload: P;
};

export type Action<Type> = {
  type: Type;
};

export interface ActionCreator<T extends string, P> {
  (...args: any[]): ActionWithPayload<T, P>;
}

// export const createAction = <Type extends string>(type: Type) => <Payload>(payload: Payload): ActionWithPayload<Type, Payload> => ({ type, payload });
