import React, { PropsWithChildren, useReducer } from "react";

import { DEFAULT_INITIAL_ROWS } from "@/shared/constants/game";
import { Shape } from "@/shared/constants/shape";
import { getInitialGame } from "@/shared/utils/get-initial";

import { gameReducer } from "./reducer";
import { GameContextValue, GameDispatch } from "./types";

const initialState: GameContextValue = getInitialGame({
  countdown: false,
  initialRows: DEFAULT_INITIAL_ROWS,
  // TODO: Generate this randomly, but prevent SSR mismatch error
  shapeNext: Shape.S,
});

export const GameContext = React.createContext<{
  state: GameContextValue;
  dispatch: GameDispatch | null;
}>({ state: initialState, dispatch: null });

export function GameProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(gameReducer, { ...initialState });

  return <GameContext.Provider value={{ state, dispatch }}>{props.children}</GameContext.Provider>;
}
