import { useEffect, useRef } from "react";

import { useGameCallbacks, useGameState } from "@/context/game";
import { GameStatus } from "@/shared/constants/game";
import { useSpeed } from "@/shared/hooks/use-speed";

export function useTick() {
  const state = useGameState();
  const { onTick } = useGameCallbacks();

  const speedMs = useSpeed();

  const interval = useRef<NodeJS.Timeout>();
  const isPlaying = state?.status === GameStatus.PLAYING;
  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    if (isPlaying && onTick) {
      interval.current = setInterval(onTick, speedMs);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [onTick, speedMs, isPlaying]);
}
