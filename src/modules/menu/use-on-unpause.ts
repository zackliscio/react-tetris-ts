import { useGameCallbacks, useGameState } from "@/context/game";
import { GameStatus } from "@/shared/constants/game";
import { KEYS_PAUSE } from "@/shared/constants/keyboard";
import { useCallback, useEffect } from "react";

export function useOnUnpause() {
  const state = useGameState();
  const { status } = state || {};
  const { onUnpause } = useGameCallbacks();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (KEYS_PAUSE.includes(e.key)) {
        onUnpause?.();
      }
    },
    [onUnpause]
  );

  const isPaused = status === GameStatus.PAUSED;
  useEffect(() => {
    if (isPaused) {
      window.addEventListener("keydown", onKeyDown);
    } else {
      window.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPaused, onKeyDown]);
}
