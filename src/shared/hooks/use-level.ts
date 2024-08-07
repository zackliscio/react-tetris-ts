import { useAppContext } from "@/context/app";
import { useGameState } from "@/context/game";
import { CLEARED_FOR_LEVEL } from "@/shared/constants/score";

export function useLevel() {
  const state = useGameState();
  const {
    state: { initialLevel },
  } = useAppContext();

  return state ? Math.floor(state.cleared / CLEARED_FOR_LEVEL) + initialLevel : 0;
}
