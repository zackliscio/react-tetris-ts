import { Dispatch } from 'react';

export type ContextState<S, A> = {
  state: S;
  dispatch: Dispatch<A>;
};
