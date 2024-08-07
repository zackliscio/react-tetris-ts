import { useGameState } from "@/context/game";

import { GameCountdownView } from "./view";

export function GameCountdown() {
  const { countdown } = useGameState();
  return countdown ? <GameCountdownView /> : null;
}
