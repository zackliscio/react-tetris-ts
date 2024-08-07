import { useGameCallbacks } from "@/context/game";
import { Board } from "@/shared/components/board";

import { useCountdown } from "./use-countdown";

export function GameCountdownView() {
  const { onFinishedCountdown } = useGameCallbacks();

  const secondsLeft = useCountdown({
    callback: onFinishedCountdown,
    seconds: 3,
  });

  return (
    <>
      <Board>
        <div className="text-white" style={{ fontSize: "33vw" }}>
          {secondsLeft}
        </div>
      </Board>
    </>
  );
}
