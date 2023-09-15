export const GAME_ACTION = {
  INITIAL_LEVEL: 'INITIAL_LEVEL',
  INITIAL_ROWS: 'INITIAL_ROWS',
  MOVE: 'MOVE',
  ROTATE: 'ROTATE',
  SET_DROP: 'SET_DROP',
  START: 'START',
  START_COUNTDOWN: 'START_COUNTDOWN',
  TICK: 'TICK',
  TOGGLE_PAUSE: 'TOGGLE_PAUSE',
  TOGGLE_EXPOSE: 'TOGGLE_EXPOSE',
} as const;

export type AnyGameActionType = (typeof GAME_ACTION)[keyof typeof GAME_ACTION];

export interface AnyGameAction {
  type: AnyGameActionType;
  payload?: unknown;
}

export interface InitialLevelAction extends AnyGameAction {
  type: typeof GAME_ACTION.INITIAL_LEVEL;
  payload: number;
}

export interface InitialRowsAction extends AnyGameAction {
  type: typeof GAME_ACTION.INITIAL_ROWS;
  payload: number;
}

export interface MoveAction extends AnyGameAction {
  type: typeof GAME_ACTION.MOVE;
  payload: number;
}

export interface RotateAction extends AnyGameAction {
  type: typeof GAME_ACTION.ROTATE;
}

export interface SetDropAction extends AnyGameAction {
  type: typeof GAME_ACTION.SET_DROP;
  payload: boolean;
}

export interface StartAction extends AnyGameAction {
  type: typeof GAME_ACTION.START;
}

export interface StartCountdownAction extends AnyGameAction {
  type: typeof GAME_ACTION.START_COUNTDOWN;
}

export interface TickAction extends AnyGameAction {
  type: typeof GAME_ACTION.TICK;
}

export interface ToogleExposeAction extends AnyGameAction {
  type: typeof GAME_ACTION.TOGGLE_EXPOSE;
}

export interface TogglePauseAction extends AnyGameAction {
  type: typeof GAME_ACTION.TOGGLE_PAUSE;
}
