import React, { PropsWithChildren, useReducer } from "react";

import { getInitialGame } from "@/shared/utils/get-initial";

import { gameReducer } from "./reducer";
import { GameContextValue, GameDispatch } from "./types";

const initialState: GameContextValue = getInitialGame({
  countdown: false,
  initialRows: 0,
});

export const GameContext = React.createContext<{
  state: GameContextValue;
  dispatch: GameDispatch | null;
}>({ state: initialState, dispatch: null });

export function GameProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return <GameContext.Provider value={{ state, dispatch }}>{props.children}</GameContext.Provider>;
}
