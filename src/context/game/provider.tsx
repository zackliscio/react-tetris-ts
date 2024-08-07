import React, { PropsWithChildren, useMemo, useReducer } from "react";

import { DEFAULT_INITIAL_ROWS } from "@/shared/constants/game";
import { getInitialGame } from "@/shared/utils/get-initial";
import { getRandomRotate, getRandomShape } from "@/shared/utils/get-random";
import { gameReducer } from "./reducer";
import { GameContextValue, GameDispatch } from "./types";

export const GameContext = React.createContext<{
  state: GameContextValue | null;
  dispatch: GameDispatch | null;
}>({ state: null, dispatch: null });

export function GameProvider(props: PropsWithChildren) {
  const initialState = useMemo(() => {
    const shape = getRandomShape();
    const shapeNext = getRandomShape();
    return getInitialGame({
      countdown: false,
      initialRows: DEFAULT_INITIAL_ROWS,
      shape,
      shapeNext,
      rotate: getRandomRotate(shape),
      rotateNext: getRandomRotate(shapeNext),
    });
  }, []);

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return <GameContext.Provider value={{ state, dispatch }}>{props.children}</GameContext.Provider>;
}
