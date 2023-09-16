import { KEYS_BOTTOM, KEYS_LEFT, KEYS_PAUSE, KEYS_RIGHT, KEYS_ROTATE } from '@/constants/keys';
import { GAME_ACTION } from '@/context/Context.actionTypes';
import { useTetrisContext } from '@/context/Context.utils';

import { useEffect, useRef } from 'react';

const { MOVE, ROTATE, SET_DROP, TOGGLE_PAUSE } = GAME_ACTION;

export function GameKeyboardEffects() {
  const { dispatch } = useTetrisContext();
  const move = useRef((payload: number) => dispatch({ type: MOVE, payload }));
  const pauseGame = useRef(() => dispatch({ type: TOGGLE_PAUSE }));
  const rotate = useRef(() => dispatch({ type: ROTATE }));
  const setDrop = useRef((payload: boolean) => dispatch({ type: SET_DROP, payload }));

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
