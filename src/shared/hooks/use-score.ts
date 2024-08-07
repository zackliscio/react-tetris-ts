import { useAppContext } from "@/context/app";
import { useGameState } from "@/context/game";
import { useLevel } from "./use-level";

export function useScore() {
  const {
    state: { initialLevel, initialRows },
  } = useAppContext();
  const state = useGameState();
  const level = useLevel();

  return state ? state.cleared * (initialLevel + initialRows + level + 1) : 0;
}
