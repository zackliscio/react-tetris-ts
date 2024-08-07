import { Shape } from "@/shared/constants/shape";
import { getNextRotateIndex } from "@/shared/utils/get-next-rotate-index";
import { getShapeCoords } from "@/shared/utils/get-shape-coords";
import { getStateWithHint } from "@/shared/utils/get-shape-hint";

import { GameContextValue } from "../types";

export function move(state: GameContextValue, payload: number) {
  const xCurrent = state.x + payload;
  const coords = getShapeCoords({ x: xCurrent }, state);
  if (!coords) return state;

  return getStateWithHint({ ...state, x: xCurrent });
}

export function rotate(state: GameContextValue, payload: 1 | -1) {
  const rotateCurrent = getNextRotateIndex({ shape: state.shape, rotate: state.rotate, direction: payload });
  const rotated = getShapeCoords({ rotate: rotateCurrent }, state);
  if (rotated) {
    return getStateWithHint({
      ...state,
      rotate: rotateCurrent,
    });
  }

  const altX = state.x < 0 ? state.x + 1 : state.x - 1;
  const rotatedAndMoved = getShapeCoords({ rotate: rotateCurrent, x: altX }, state);
  if (rotatedAndMoved) {
    return getStateWithHint({
      ...state,
      rotate: rotateCurrent,
      x: altX,
    });
  }

  if (state.shape === Shape.I && state.x > 0) {
    const altXDoubled = state.x - 2;
    const rotatedAndMovedDouble = getShapeCoords({ rotate: rotateCurrent, x: altXDoubled }, state);
    if (rotatedAndMovedDouble) {
      return getStateWithHint({
        ...state,
        rotate: rotateCurrent,
        x: altXDoubled,
      });
    }
  }

  return state;
}
