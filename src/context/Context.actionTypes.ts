import { TetrisThemeModePreference } from '@/types/public';

export const GAME_ACTION = {
  INITIAL_LEVEL: 'INITIAL_LEVEL',
  INITIAL_ROWS: 'INITIAL_ROWS',
  MOVE: 'MOVE',
  ROTATE: 'ROTATE',
  SET_DROP: 'SET_DROP',
  START: 'START',
  START_COUNTDOWN: 'START_COUNTDOWN',
  SWIPE_START: 'SWIPE_START',
  SWIPE_STOPED: 'SWIPE_STOPED',
  SWIPE_SWIPING: 'SWIPE_SWIPING',
  TICK: 'TICK',
  TOGGLE_PAUSE: 'TOGGLE_PAUSE',
} as const;

export const CONFIG_ACTION = {
  THEME_MODE: 'THEME_MODE',
} as const;

export type ActionMove = { type: typeof GAME_ACTION.MOVE; payload: number };
export type ActionSwiping = { type: typeof GAME_ACTION.SWIPE_SWIPING; payload: number };

export type Action =
  | { type: typeof GAME_ACTION.INITIAL_LEVEL; payload: number }
  | { type: typeof GAME_ACTION.INITIAL_ROWS; payload: number }
  | ActionMove
  | { type: typeof GAME_ACTION.ROTATE }
  | { type: typeof GAME_ACTION.SET_DROP; payload: boolean }
  | { type: typeof GAME_ACTION.SWIPE_START }
  | { type: typeof GAME_ACTION.SWIPE_STOPED }
  | ActionSwiping
  | { type: typeof GAME_ACTION.START }
  | { type: typeof GAME_ACTION.START_COUNTDOWN }
  | { type: typeof GAME_ACTION.TICK }
  | { type: typeof GAME_ACTION.TOGGLE_PAUSE }
  | { type: typeof CONFIG_ACTION.THEME_MODE; payload: TetrisThemeModePreference };
