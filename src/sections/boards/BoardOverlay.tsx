import { useEffect, useRef } from 'react';

import { Board } from '@/components/board/Board';
import { TETRIS_COUNTDOWN_S, TETRIS_STATUS } from '@/constants/game';
import { GAME_ACTION } from '@/context/game/Game.actionTypes';
import { useGameContext } from '@/context/game/Game.utils';
import { useCountdown } from '@/utils/useCountdown';

export function BoardOverlay() {
  const { actions, state } = useGameContext();

  const countdown = useCountdown(TETRIS_COUNTDOWN_S);

  const isCountdown = state.status === TETRIS_STATUS.COUNTDOWN;
  const restartCountdown = useRef(countdown.restart);
  useEffect(() => {
    if (isCountdown) restartCountdown.current();
  }, [isCountdown]);

  const { isFinished } = countdown;
  const startGame = useRef(actions[GAME_ACTION.START]);
  useEffect(() => {
    if (isFinished) startGame.current();
  }, [isFinished]);

  return (
    <Board
      id="countdown"
      className="bg-background"
      classNameCell="bg-board"
      isVisible
      isDown={!isCountdown}
    >
      {isCountdown && <span className="text-6xl">{countdown.number}</span>}
    </Board>
  );
}
