import { useEffect, useState } from 'react';
import { SwipeEventData, useSwipeable } from 'react-swipeable';

import { GAME_ACTION } from '@/context/Context.actionTypes';
import { useTetrisContext } from '@/context/Context.utils';
import { TETRIS_AREA } from '@/constants/board';

function isVerticalSwipe(e: SwipeEventData, cellSize: number | undefined) {
  if (!cellSize) return false;
  const deltaX = Math.abs(e.deltaX);
  const deltaY = Math.abs(e.deltaY);
  const minDeltaY = cellSize * 1.5;
  return deltaY * 1.5 > deltaX && deltaY >= minDeltaY;
}

export function GameSwipable() {
  const [cellSize, setCellSize] = useState<undefined | number>(undefined);

  const { dispatch } = useTetrisContext();
  const handlers = useSwipeable({
    onSwipeStart: () => {
      dispatch({ type: GAME_ACTION.SWIPE_START });
    },
    onSwiping: (e) => {
      if (!cellSize) return;
      const isDown = isVerticalSwipe(e, cellSize);
      if (!isDown) {
        const payload = Math.ceil(e.deltaX / cellSize);
        dispatch({ type: GAME_ACTION.SWIPE_SWIPING, payload });
      }
    },
    onSwiped: () => {
      dispatch({ type: GAME_ACTION.SWIPE_STOPED });
    },
    onSwipedDown: (e) => {
      const isDown = isVerticalSwipe(e, cellSize);
      if (isDown) dispatch({ type: GAME_ACTION.SET_DROP, payload: true });
    },
    onTap: () => {
      dispatch({ type: GAME_ACTION.ROTATE });
    },
    delta: cellSize,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    function handler() {
      setCellSize(window.innerWidth / TETRIS_AREA.WIDTH);
    }
    handler();
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return cellSize ? <div className="absolute inset-0" {...handlers} /> : null;
}
