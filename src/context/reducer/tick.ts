import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';
import { clearFullRows, getFullRows } from '@/utils/board';
import { getShapeParams, isShapeInvalid, recalculateShape } from '@/utils/shape';
import { getRandomArrayValue, getRandomRotate } from '@/utils/random';

import { ContextValue } from '../Context';

export function onTick(state: ContextValue) {
  if (!state.game) return state;
  const { shape, placed, rotate, rowsFull, score, x, y } = state.game;

  if (rowsFull) {
    const placedNew = clearFullRows(rowsFull, placed);
    return {
      ...state,
      game: {
        ...state.game,
        score: score + rowsFull.length,
        isDrop: false,
        placed: placedNew,
        rowsFull: null,
      },
    };
  }

  const tickedY = y + 1;
  const currentShapeCoords = recalculateShape(shape, rotate, x, y);
  const movedShapeCoords = recalculateShape(shape, rotate, x, tickedY);
  const movedShapeParams = getShapeParams(shape);
  const willPlace = isShapeInvalid(movedShapeCoords, placed);

  if (!willPlace) {
    return {
      ...state,
      game: {
        ...state.game,
        y: y + 1,
      },
    };
  }

  const isFinished = willPlace && y === 0;
  if (isFinished) {
    return {
      ...state,
      game: {
        ...state.game,
        isFinished: true,
      },
    };
  }

  const newPlaced = placed;
  currentShapeCoords.forEach((coord) => {
    newPlaced[coord] = movedShapeParams.shape;
  });

  const rowsFullNew = getFullRows(placed);

  const { shape: nextShape } = getRandomArrayValue(TETRIS_SHAPE_PARAMS);
  return {
    ...state,
    next: {
      shape: nextShape,
      rotate: getRandomRotate(nextShape),
    },
    game: {
      ...state.game,
      isDrop: false,
      shape: state.next.shape,
      rotate: state.next.rotate,
      rowsFull: rowsFullNew,
      placed: newPlaced,
      y: 0,
      x: 0,
    },
  };
}
