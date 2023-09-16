import React, { PropsWithChildren, useReducer } from 'react';

import { THEME_MODE } from '@/constants/colors';
import { TETRIS_STATUS, TetrisStatus } from '@/constants/game';
import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';
import { getRandomArrayValue, getRandomRotate } from '@/utils/random';

import { getDefaultConfig } from './utils/Config.utils';

import { Action } from './Context.actionTypes';
import { gameReducer } from './Context.reducer';
import {
  AppConfig,
  BoardRowCell,
  BoardRowCellInitial,
  Shape,
  ThemeModePreference,
  ThemeModeSelected,
} from './Context.types';

/* Types */

export type ContextValue = {
  config: AppConfig;
  game: null | {
    isDrop: boolean;
    isFinished: boolean;
    placed: (BoardRowCell | BoardRowCellInitial)[];
    rotate: number;
    rowsFull: number[] | null;
    score: number;
    shape: Shape;
    x: number;
    xSwipeRef: number | null;
    y: number;
  };
  gameSetup: {
    initialLevel: number;
    initialRows: number;
  };
  isWaitingForLocalStorage: boolean;
  next: {
    shape: Shape;
    rotate: number;
  };
  status: TetrisStatus;
  theme: {
    user: ThemeModePreference;
    selected: ThemeModeSelected;
    system: ThemeModeSelected;
    isChanged: boolean;
  };
};

/* Context */

export const TetrisContext = React.createContext<{
  state: ContextValue;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function TetrisContextWrap(props: PropsWithChildren & { config?: Partial<AppConfig> }) {
  const { shape: shapeNextInitial } = getRandomArrayValue(TETRIS_SHAPE_PARAMS);

  const config = getDefaultConfig(props.config);
  const themeSystem = window.matchMedia('prefers-color-scheme: dark').matches
    ? THEME_MODE.DARK
    : THEME_MODE.LIGHT;

  const initialState = {
    config,
    game: null,
    gameSetup: {
      initialLevel: 3,
      initialRows: 3,
    },
    isWaitingForLocalStorage: Boolean(props.config?.isPersisted),
    next: {
      shape: shapeNextInitial,
      rotate: getRandomRotate(shapeNextInitial),
    },
    status: TETRIS_STATUS.IDLE,
    theme: {
      user: config?.theme,
      selected: config.theme === THEME_MODE.SYSTEM ? themeSystem : config.theme,
      system: themeSystem,
      isChanged: false,
    },
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <TetrisContext.Provider value={{ state, dispatch }}>{props.children}</TetrisContext.Provider>
  );
}
