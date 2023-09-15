import { KEYS_BOTTOM, KEYS_LEFT, KEYS_PAUSE, KEYS_RIGHT, KEYS_ROTATE } from '@/constants/keys';
import { GAME_ACTION } from '@/context/game/Game.actionTypes';
import { useGameContext } from '@/context/game/Game.utils';
import { useEffect, useRef } from 'react';

export function GameKeyboardEffects() {
  const { actions } = useGameContext();
  const move = useRef(actions[GAME_ACTION.MOVE]);
  const pauseGame = useRef(actions[GAME_ACTION.TOGGLE_PAUSE]);
  const rotate = useRef(actions[GAME_ACTION.ROTATE]);
  const setDrop = useRef(actions[GAME_ACTION.SET_DROP]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (KEYS_PAUSE.includes(e.key)) {
        pauseGame.current();
      } else if (KEYS_BOTTOM.includes(e.key)) {
        setDrop.current(true);
      } else if (KEYS_ROTATE.includes(e.key)) {
        rotate.current();
      } else if (KEYS_LEFT.includes(e.key)) {
        move.current(-1);
      } else if (KEYS_RIGHT.includes(e.key)) {
        move.current(1);
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      if (KEYS_BOTTOM.includes(e.key)) {
        setDrop.current(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return null;
}
