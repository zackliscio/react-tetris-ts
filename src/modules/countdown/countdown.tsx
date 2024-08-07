import { useGameContext } from "@/context/game";

import { GameCountdownView } from "./view";

export function GameCountdown() {
  const {
    state: { countdown },
  } = useGameContext();
  return countdown ? <GameCountdownView /> : null;
}
