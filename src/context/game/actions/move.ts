import { Shape } from "@/shared/constants/shape";
import { getNextRotateIndex } from "@/shared/utils/get-next-rotate-index";
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

export function rotate(state: GameContextValue, payload: 1 | -1): GameContextValue {
  if (!state.board) {
    throw new Error("Board not created");
  }

  const rotateCurrent = getNextRotateIndex({
    shape: state.board.shape,
    rotate: state.board.rotate,
    direction: payload,
  });
  const rotated = getShapeCoords({ rotate: rotateCurrent }, state.board);
  if (rotated) {
    return {
      ...state,
      board: {
        ...state.board,
        hint: getShapeHint(state.board),
        rotate: rotateCurrent,
      },
    };
  }

  const altX = state.board.x < 0 ? state.board.x + 1 : state.board.x - 1;
  const rotatedAndMoved = getShapeCoords({ rotate: rotateCurrent, x: altX }, state.board);
  if (rotatedAndMoved) {
    return {
      ...state,
      board: {
        ...state.board,
        hint: getShapeHint(state.board),
        rotate: rotateCurrent,
        x: altX,
      },
    };
  }

  if (state.board.shape === Shape.I && state.board.x > 0) {
    const altXDoubled = state.board.x - 2;
    const rotatedAndMovedDouble = getShapeCoords({ rotate: rotateCurrent, x: altXDoubled }, state.board);
    if (rotatedAndMovedDouble) {
      return {
        ...state,
        board: {
          ...state.board,
          hint: getShapeHint(state.board),
          rotate: rotateCurrent,
          x: altXDoubled,
        },
      };
    }
  }

  return state;
}
