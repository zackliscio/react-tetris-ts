import { useAppContext } from "@/context/app";
import { useGameState } from "@/context/game";
import { useLevel } from "./use-level";

export function useScore() {
  const {
    state: { initialLevel, initialRows },
  } = useAppContext();
  const { cleared } = useGameState();
  const level = useLevel();

  return cleared * (initialLevel + initialRows + level + 1);
}
