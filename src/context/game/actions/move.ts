import { getShapeCoords } from "@/shared/utils/get-shape-coords";

import { getShapeHint } from "@/shared/utils/get-shape-hint";
import { GameContextValue } from "../types";

export function move(state: GameContextValue, payload: number): GameContextValue {
  if (!state.board) {
    throw new Error("Board not created");
  }

  const xCurrent = state.board.x + payload;
  const coords = getShapeCoords({ x: xCurrent }, state.board);
  if (!coords) return state;

  return {
    ...state,
    board: {
      ...state.board,
      hint: getShapeHint(state.board),
      x: xCurrent,
    },
  };
}
