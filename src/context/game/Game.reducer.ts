import { getInitialGame } from './utils/BoardInitial.utils';

import { TETRIS_STATUS, TetrisStatus } from '@/constants/game';
import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';
import { clearFullRows, getFullRows } from '@/utils/board';
import { getShapeParams, isShapeInvalid, recalculateShape } from '@/utils/shape';
import { getRandomArrayValue, getRandomRotate } from '@/utils/random';

import {
  GAME_ACTION,
  AnyGameAction,
  MoveAction,
  InitialLevelAction,
  InitialRowsAction,
  SetDropAction,
} from './Game.actionTypes';
import { GameContextValue } from './Game.context';

export function gameReducer(state: GameContextValue, action: AnyGameAction): GameContextValue {
  switch (action.type) {
    // Config
    case GAME_ACTION.INITIAL_LEVEL: {
      const payload = (action as InitialLevelAction).payload; // TODO: TypeCasting
      return {
        ...state,
        config: {
          ...state.config,
          initialLevel: payload,
        },
      };
    }
    case GAME_ACTION.INITIAL_ROWS: {
      const payload = (action as InitialRowsAction).payload; // TODO: TypeCasting
      return {
        ...state,
        config: {
          ...state.config,
          initialRows: payload,
        },
      };
    }
    // Status
    case GAME_ACTION.START: {
      const isRestart = !state.game || state.game.isFinished;
      const { shape: nextShape } = getRandomArrayValue(TETRIS_SHAPE_PARAMS);

      return {
        ...state,
        next: {
          shape: nextShape,
          rotate: getRandomRotate(nextShape),
        },
        game: isRestart ? getInitialGame(state.next, state.config) : state.game,
        status: TETRIS_STATUS.PLAYING,
      };
    }
    case GAME_ACTION.START_COUNTDOWN: {
      return { ...state, status: TETRIS_STATUS.COUNTDOWN };
    }
    case GAME_ACTION.TOGGLE_EXPOSE:
      return {
        ...state,
        isExposed: !state.isExposed,
      };
    case GAME_ACTION.TOGGLE_PAUSE: {
      let status: TetrisStatus;
      switch (state.status) {
        case TETRIS_STATUS.PLAYING:
          status = TETRIS_STATUS.PAUSED;
          break;
        case TETRIS_STATUS.PAUSED:
          status = TETRIS_STATUS.COUNTDOWN;
          break;
        default:
          status = state.status;
          break;
      }
      return {
        ...state,
        status,
      };
    }
    // Game
    case GAME_ACTION.MOVE: {
      if (!state.game) return state;
      const { shape, placed, rotate, x, y } = state.game;
      const payload = (action as MoveAction).payload; // TODO: TypeCasting
      const newX = x + payload;
      const newShape = recalculateShape(shape, rotate, newX, y);
      const isInvalid = isShapeInvalid(newShape, placed);

      return {
        ...state,
        game: {
          ...state.game,
          x: isInvalid ? state.game.x : newX,
        },
      };
    }
    case GAME_ACTION.ROTATE: {
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
    }
    case GAME_ACTION.SET_DROP: {
      if (!state.game) return state;
      const payload = (action as SetDropAction).payload; // TODO: TypeCasting
      return {
        ...state,
        game: {
          ...state.game,
          isDrop: payload,
        },
      };
    }
    // Tick
    case GAME_ACTION.TICK: {
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
    default:
      return state;
  }
}
