import { useEffect, useRef } from 'react';

import { GAME_ACTION } from '@/context/game/Game.actionTypes';
import { useGameContext, useGameTickSpeed } from '@/context/game/Game.utils';

export function GameTick() {
  const { actions } = useGameContext();
  const tick = useRef(actions[GAME_ACTION.TICK]);
  const ms = useGameTickSpeed();

  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(tick.current, ms);
    return () => clearInterval(interval.current);
  }, [ms]);

  return null;
}
