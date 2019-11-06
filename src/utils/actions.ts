export type Action<Type> = {
  type: Type;
};

export type ActionWithPayload<T, P> = Action<T> & {
  payload: P;
};
