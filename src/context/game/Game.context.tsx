import React, { PropsWithChildren, useReducer } from 'react';

import { TETRIS_STATUS, TetrisStatus } from '@/constants/game';

import {
  AnyGameActionType,
  GAME_ACTION,
  InitialLevelAction,
  InitialRowsAction,
  MoveAction,
  RotateAction,
  StartAction,
  StartCountdownAction,
  SetDropAction,
  TogglePauseAction,
} from './Game.actionTypes';
import { gameReducer } from './Game.reducer';
import { BoardRowCell, BoardRowCellInitial, Shape } from './Game.types';
import { getRandomArrayValue, getRandomRotate } from '@/utils/random';
import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';

/* Types */

export type GameContextValue = {
  game: null | {
    isDrop: boolean;
    isFinished: boolean;
    placed: (BoardRowCell | BoardRowCellInitial)[];
    rotate: number;
    rowsFull: number[] | null;
    score: number;
    shape: Shape;
    x: number;
    y: number;
  };
  config: {
    initialLevel: number;
    initialRows: number;
  };
  next: {
    shape: Shape;
    rotate: number;
  };
  isExposed: boolean;
  status: TetrisStatus;
};

/* Context */

export const GameContext = React.createContext<{
  state: GameContextValue;
  actions: Record<AnyGameActionType, (payload?: number | boolean) => void>;
} | null>(null);

export function GameContextWrap(props: PropsWithChildren) {
  const { shape: shapeNextInitial } = getRandomArrayValue(TETRIS_SHAPE_PARAMS);
  const initialState = {
    game: null,
    config: {
      initialLevel: 3,
      initialRows: 3,
    },
    next: {
      shape: shapeNextInitial,
      rotate: getRandomRotate(shapeNextInitial),
    },
    isExposed: false,
    status: TETRIS_STATUS.IDLE,
  };

  const actions = {
    [GAME_ACTION.INITIAL_LEVEL]: (payload: number) => {
      const action: InitialLevelAction = { type: GAME_ACTION.INITIAL_LEVEL, payload };
      dispatch(action);
    },
    [GAME_ACTION.INITIAL_ROWS]: (payload: number) => {
      const action: InitialRowsAction = { type: GAME_ACTION.INITIAL_ROWS, payload };
      dispatch(action);
    },
    [GAME_ACTION.MOVE]: (payload: number) => {
      const action: MoveAction = { type: GAME_ACTION.MOVE, payload };
      dispatch(action);
    },
    [GAME_ACTION.ROTATE]: () => {
      const action: RotateAction = { type: GAME_ACTION.ROTATE };
      dispatch(action);
    },
    [GAME_ACTION.START]: () => {
      const action: StartAction = { type: GAME_ACTION.START };
      dispatch(action);
    },
    [GAME_ACTION.START_COUNTDOWN]: () => {
      const action: StartCountdownAction = { type: GAME_ACTION.START_COUNTDOWN };
      dispatch(action);
    },
    [GAME_ACTION.SET_DROP]: (payload: boolean) => {
      const action: SetDropAction = { type: GAME_ACTION.SET_DROP, payload };
      dispatch(action);
    },
    [GAME_ACTION.TICK]: () => dispatch({ type: GAME_ACTION.TICK }),
    [GAME_ACTION.TOGGLE_EXPOSE]: () => dispatch({ type: GAME_ACTION.TOGGLE_PAUSE }),
    [GAME_ACTION.TOGGLE_PAUSE]: () => {
      const action: TogglePauseAction = { type: GAME_ACTION.TOGGLE_PAUSE };
      dispatch(action);
    },
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);
  return <GameContext.Provider value={{ state, actions }}>{props.children}</GameContext.Provider>;
}
