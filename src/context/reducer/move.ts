import { TETRIS_AREA } from '@/constants/board';
import { getShapeParams, isShapeInvalid, recalculateShape } from '@/utils/shape';

import { ContextValue } from '../Context';
import { ActionMove, ActionSwiping } from '../Context.actionTypes';

const SWIPE_BOUNDS = TETRIS_AREA.WIDTH / 2;

function modifyStateWithNewX(state: ContextValue, newX: number) {
  if (!state.game) return state;
  if (newX === state.game.x) return state;

  let newXInBounds = newX;
  newXInBounds = Math.min(newXInBounds, SWIPE_BOUNDS);
  newXInBounds = Math.max(newXInBounds, SWIPE_BOUNDS * -1);

  const { shape, rotate, y, placed } = state.game;
  const newShape = recalculateShape(shape, rotate, newXInBounds, y);
  const isInvalid = isShapeInvalid(newShape, placed);
  if (isInvalid) return state;
  /*
  if (isInvalid) {
    const isLeft = newX < 0;
    newXInBounds = isLeft ? x + -1 : x + 1;
    newShape = recalculateShape(shape, rotate, newXInBounds, y);
    isInvalid = isShapeInvalid(newShape, placed);
    if (isInvalid) return state;
  }
  */

  return {
    ...state,
    game: {
      ...state.game,
      x: newXInBounds,
    },
  };
}

export function onMove(state: ContextValue, action: ActionMove) {
  if (!state.game) return state;
  const { x } = state.game;
  return modifyStateWithNewX(state, x + action.payload);
}

export function onSwiping(state: ContextValue, action: ActionSwiping) {
  if (!state.game) return state;
  const { xSwipeRef } = state.game;
  if (typeof xSwipeRef !== 'number') throw new Error('onSwiping: Missing ref!');
  return modifyStateWithNewX(state, xSwipeRef + action.payload);
}

function modifyStateWithNewRotate(state: ContextValue, trial: number) {
  if (!state.game) return null;
  const { shape, placed, rotate, x, y } = state.game;

  const xModifier = x >= 0 ? -1 : 1;
  const xModified = x + trial * xModifier;

  const params = getShapeParams(state.game.shape);
  const newRotate = params.coords[rotate + 1] ? rotate + 1 : 0;
  const newShape = recalculateShape(shape, newRotate, xModified, y);
  const isInvalid = isShapeInvalid(newShape, placed);
  if (isInvalid) return null;

  return {
    ...state,
    game: {
      ...state.game,
      x: xModified,
      rotate: newRotate,
    },
  };
}

export function onRotate(state: ContextValue) {
  let i = 0;
  let result: ContextValue | null = null;
  while (i <= 3 && !result) {
    result = modifyStateWithNewRotate(state, i);
    i += 1;
  }
  return result || state;

  /*
  if (!state.game) return state;
  const { shape, placed, rotate, x, y } = state.game;
  const params = getShapeParams(state.game.shape);
  const newRotate = params.coords[rotate + 1] ? rotate + 1 : 0;
  const newShape = recalculateShape(shape, newRotate, x, y);
  const isInvalid = isShapeInvalid(newShape, placed);

  return {
    ...state,
    game: {
      ...state.game,
      rotate: isInvalid ? state.game.rotate : newRotate,
    },
  };
  */
}
