import { useContext } from 'react';

import { TETRIS_SPEED_DROP, TETRIS_SPEED_INITIAL } from '@/constants/game';
import getSpeed from '@/utils/score';

import { TetrisContext } from './Context';

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
