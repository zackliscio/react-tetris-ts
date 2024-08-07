import { useAppContext } from "@/context/app";
import { useGameState } from "@/context/game";
import { CLEARED_FOR_LEVEL } from "@/shared/constants/score";

export function useLevel() {
  const { cleared } = useGameState();
  const {
    state: { initialLevel },
  } = useAppContext();
  return Math.floor(cleared / CLEARED_FOR_LEVEL) + initialLevel;
}
