import React, { useContext, useEffect, useState } from 'react';

import { TETRIS_SPEED_DROP, TETRIS_SPEED_INITIAL } from '@/constants/game';
import { TETRIS_THEME_MODE } from '@/constants/theme';
import { TetrisThemeModeSelected } from '@/types/public';
import getSpeed from '@/utils/score';

import { ContextValue } from './Context';

import { Action } from './Context.actionTypes';

export const TetrisContext = React.createContext<{
  state: ContextValue;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function useTetrisContext() {
  const ctx = useContext(TetrisContext);
  if (!ctx) throw new Error(`useGameContext: Empty context.`);
  return ctx;
}

export function useGameTickSpeed() {
  const { state } = useTetrisContext();
  const { game } = state;
  const isClearing = Boolean(game?.rowsFull);
  const isDrop = Boolean(game?.isDrop);

  let ms: number;
  if (isDrop && !isClearing) {
    ms = TETRIS_SPEED_DROP;
  } else if (state.game) {
    ms = getSpeed(state.game?.score, state.gameSetup.initialLevel);
  } else {
    ms = TETRIS_SPEED_INITIAL;
  }

  return ms;
}

export function useDarkMode() {
  const [themeSystem, setThemeSystem] = useState<TetrisThemeModeSelected | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia('prefers-color-scheme: dark');

    function handler() {
      const isDark = mq.matches;
      setThemeSystem(isDark ? TETRIS_THEME_MODE.DARK : TETRIS_THEME_MODE.LIGHT);
    }

    handler();
    mq.addEventListener('change', handler);

    return () => {
      mq.removeEventListener('change', handler);
    };
  }, []);

  return themeSystem;
}
