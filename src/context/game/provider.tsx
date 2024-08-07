import React, { PropsWithChildren, useEffect, useReducer } from "react";

import { GameActionType } from "./action-types";
import { gameReducer } from "./reducer";
import { GameContextValue, GameDispatch } from "./types";

export const GameContext = React.createContext<{
  state: GameContextValue | null;
  dispatch: GameDispatch | null;
}>({ state: null, dispatch: null });

export function GameProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(gameReducer, null);

  useEffect(() => {
    dispatch({ type: GameActionType.HYDRATE });
  }, [dispatch]);

  return <GameContext.Provider value={{ state, dispatch }}>{props.children}</GameContext.Provider>;
}
