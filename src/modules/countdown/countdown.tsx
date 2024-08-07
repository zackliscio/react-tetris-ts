import { useGameState } from "@/context/game";

import { GameCountdownView } from "./view";

export function GameCountdown() {
  const state = useGameState();
  return state?.countdown ? <GameCountdownView /> : null;
}
