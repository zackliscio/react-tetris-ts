import { useContext } from 'react';

import { GameContext } from './Game.context';
import { TETRIS_SPEED_DROP, TETRIS_SPEED_INITIAL } from '@/constants/game';
import getSpeed from '@/utils/score';

export function useGameContext() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error(`useGameContext: Empty context.`);
  return ctx;
}

export function useGameTickSpeed() {
  const { state } = useGameContext();
  const { game } = state;
  const isClearing = Boolean(game?.rowsFull);
  const isDrop = Boolean(game?.isDrop);

  let ms: number;
  if (isDrop && !isClearing) {
    ms = TETRIS_SPEED_DROP;
  } else if (state.game) {
    ms = getSpeed(state.game?.score, state.config.initialLevel);
  } else {
    ms = TETRIS_SPEED_INITIAL;
  }

  return ms;
}
