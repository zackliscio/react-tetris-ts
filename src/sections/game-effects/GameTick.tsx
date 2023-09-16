import { GAME_ACTION } from '@/context/Context.actionTypes';
import { useGameTickSpeed, useTetrisContext } from '@/context/Context.utils';
import { useEffect, useRef } from 'react';

export function GameTick() {
  const { dispatch } = useTetrisContext();
  const tick = useRef(() => dispatch({ type: GAME_ACTION.TICK }));
  const ms = useGameTickSpeed();

  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(tick.current, ms);
    return () => clearInterval(interval.current);
  }, [ms]);

  return null;
}
