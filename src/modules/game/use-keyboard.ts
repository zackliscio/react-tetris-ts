import { useCallback, useEffect } from "react";

import { useGameCallbacks, useGameState } from "@/context/game";
import { GameStatus } from "@/shared/constants/game";
import { KEYS_BOTTOM, KEYS_LEFT, KEYS_PAUSE, KEYS_RIGHT, KEYS_ROTATE } from "@/shared/constants/keyboard";

export function useKeyboardGame() {
  const state = useGameState();
  const { onDrop, onDropStop, onMove, onPause, onRotate } = useGameCallbacks();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEYS_PAUSE.includes(e.key)) {
        onPause?.();
      } else if (KEYS_BOTTOM.includes(e.key)) {
        onDrop?.();
      } else if (KEYS_ROTATE.includes(e.key)) {
        onRotate?.();
      } else if (KEYS_LEFT.includes(e.key)) {
        onMove?.(-1);
      } else if (KEYS_RIGHT.includes(e.key)) {
        onMove?.(1);
      }
    },
    [onDrop, onMove, onPause, onRotate]
  );
  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (KEYS_BOTTOM.includes(e.key)) {
        onDropStop?.();
      }
    },
    [onDropStop]
  );

  const isPlaying = state?.status === GameStatus.PLAYING;
  useEffect(() => {
    if (isPlaying) {
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
    } else {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [isPlaying, onKeyDown, onKeyUp]);
}
