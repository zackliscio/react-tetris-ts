import React, { PropsWithChildren, useMemo, useReducer } from "react";

import { DEFAULT_INITIAL_ROWS } from "@/shared/constants/game";
import { Shape } from "@/shared/constants/shape";
import { getInitialGame } from "@/shared/utils/get-initial";

import { getRandomShape } from "@/shared/utils/get-random";
import { gameReducer } from "./reducer";
import { GameContextValue, GameDispatch } from "./types";

const initialState: GameContextValue = getInitialGame({
  countdown: false,
  initialRows: DEFAULT_INITIAL_ROWS,
  shapeNext: Shape.S,
});

export const GameContext = React.createContext<{
  state: GameContextValue;
  dispatch: GameDispatch | null;
}>({ state: initialState, dispatch: null });

export function GameProvider(props: PropsWithChildren) {
  const shapeNext = useMemo(getRandomShape, []);
  const [state, dispatch] = useReducer(gameReducer, { ...initialState, shapeNext });

  return <GameContext.Provider value={{ state, dispatch }}>{props.children}</GameContext.Provider>;
}
