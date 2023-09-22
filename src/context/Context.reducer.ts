import { TETRIS_STATUS, TetrisStatus } from '@/constants/game';
import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';
import { getRandomArrayValue, getRandomRotate } from '@/utils/random';

import { onTick } from './reducer/tick';
import { onMove, onRotate, onSwiping } from './reducer/move';
import { getInitialGame } from './utils/BoardInitial.utils';

import { GAME_ACTION, CONFIG_ACTION, Action } from './Context.actionTypes';
import { ContextValue } from './Context';

export function gameReducer(state: ContextValue, action: Action): ContextValue {
  switch (action.type) {
    // Theme
    case CONFIG_ACTION.THEME_MODE: {
      return {
        ...state,
        theme: {
          ...state.theme,
          user: action.payload,
        },
      };
    }

    // GameSetup
    case GAME_ACTION.INITIAL_LEVEL: {
      return {
        ...state,
        gameSetup: {
          ...state.gameSetup,
          initialLevel: action.payload,
        },
      };
    }
    case GAME_ACTION.INITIAL_ROWS: {
      return {
        ...state,
        gameSetup: {
          ...state.gameSetup,
          initialRows: action.payload,
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
        game: isRestart ? getInitialGame(state.next, state.gameSetup) : state.game,
        status: TETRIS_STATUS.PLAYING,
      };
    }
    case GAME_ACTION.START_COUNTDOWN: {
      return { ...state, status: TETRIS_STATUS.COUNTDOWN };
    }
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
    case GAME_ACTION.MOVE:
      return onMove(state, action);
    case GAME_ACTION.ROTATE:
      return onRotate(state);
    case GAME_ACTION.SET_DROP: {
      if (!state.game) return state;
      return {
        ...state,
        game: {
          ...state.game,
          isDrop: action.payload,
        },
      };
    }
    case GAME_ACTION.SWIPE_START: {
      if (!state.game) return state;
      return {
        ...state,
        game: {
          ...state.game,
          xSwipeRef: state.game.x,
        },
      };
    }
    case GAME_ACTION.SWIPE_STOPED: {
      if (!state.game) return state;
      return {
        ...state,
        game: {
          ...state.game,
          xSwipeRef: null,
        },
      };
    }
    case GAME_ACTION.SWIPE_SWIPING: {
      return onSwiping(state, action);
    }
    // Tick
    case GAME_ACTION.TICK: {
      return onTick(state);
    }
    default:
      return state;
  }
}
