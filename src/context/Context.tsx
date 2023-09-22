import { PropsWithChildren, useReducer } from 'react';

import { TETRIS_STATUS, TetrisStatus } from '@/constants/game';
import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';
import { TETRIS_THEME_MODE } from '@/constants/theme';
import {
  TetrisAppConfig,
  TetrisThemeModePreference,
  TetrisThemeModeSelected,
} from '@/types/public';
import { getRandomArrayValue, getRandomRotate } from '@/utils/random';

import { getDefaultConfig } from './utils/Config.utils';

import { gameReducer } from './Context.reducer';
import { BoardRowCell, BoardRowCellInitial, Shape } from './Context.types';
import { TetrisContext, useDarkMode } from './Context.utils';

/* Types */

export type ContextValue = {
  config: TetrisAppConfig;
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
    user: TetrisThemeModePreference;
    selected?: TetrisThemeModeSelected;
    system?: TetrisThemeModeSelected;
    isChanged: boolean;
  };
};

/* Context */

export function TetrisContextWrap(
  props: PropsWithChildren & { config?: Partial<TetrisAppConfig> },
) {
  const { shape: shapeNextInitial } = getRandomArrayValue(TETRIS_SHAPE_PARAMS);

  const config = getDefaultConfig(props.config);
  const themeSystem = useDarkMode();

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
      selected: config.theme === TETRIS_THEME_MODE.SYSTEM ? themeSystem : config.theme,
      system: themeSystem,
      isChanged: false,
    },
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      {themeSystem ? props.children : null}
    </TetrisContext.Provider>
  );
}
