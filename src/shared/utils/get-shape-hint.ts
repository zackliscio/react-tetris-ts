import { BOARD_SIZE } from "@/shared/constants/board";

import { GameBoardState, GameContextValue } from "@/context/game/types";
import { getShapeCoords } from "./get-shape-coords";

export function getShapeHint(game: GameBoardState) {
  let y = BOARD_SIZE.height;
  let hint: number[] | null = null;
  while (!hint && y > game.y) {
    hint = getShapeCoords({ y }, game, true);
    y = y - 1;
  }
  return hint;
}

export function getStateWithHint(state: GameContextValue) {
  return { ...state, hint: getShapeHint(state) };
}
