import { useEffect, useRef } from 'react';

import { Board } from '@/components/board/Board';
import { TETRIS_COUNTDOWN_S, TETRIS_STATUS } from '@/constants/game';
import { useTetrisContext } from '@/context/Context.utils';
import { GAME_ACTION } from '@/context/Context.actionTypes';
import { useCountdown } from '@/utils/useCountdown';

export function BoardOverlay() {
  const { dispatch, state } = useTetrisContext();

  const countdown = useCountdown(TETRIS_COUNTDOWN_S);

  const isCountdown = state.status === TETRIS_STATUS.COUNTDOWN;
  const restartCountdown = useRef(countdown.restart);
  useEffect(() => {
    if (isCountdown) restartCountdown.current();
  }, [isCountdown]);

  const { isFinished } = countdown;
  const startGame = useRef(() => dispatch({ type: GAME_ACTION.START }));
  useEffect(() => {
    if (isFinished) startGame.current();
  }, [isFinished]);

  return (
    <Board
      className="bg-background"
      classNameCell="bg-board"
      isAlignBottom
      isVisible
      isDown={!isCountdown}
    >
      {isCountdown && <span className="text-6xl">{countdown.number}</span>}
    </Board>
  );
}
