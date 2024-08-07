import { useAppContext } from "@/context/app";
import { useGameState } from "@/context/game";
import { CLEARED_FOR_LEVEL } from "@/shared/constants/score";
import { DEFAULT_INITIAL_LEVEL } from "../constants/game";

export function useLevel() {
  const state = useGameState();
  const {
    state: { initialLevel },
  } = useAppContext();

  return state ? Math.floor(state.cleared / CLEARED_FOR_LEVEL) + initialLevel : DEFAULT_INITIAL_LEVEL;
}
