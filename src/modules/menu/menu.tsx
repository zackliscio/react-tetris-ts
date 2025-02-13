import { Board } from "@/shared/components/board";
import { LightMode } from "@/shared/components/light-mode";
import { GameStatus } from "@/shared/constants/game";

import { ButtonPlay } from "./button-play";
import { ButtonResume } from "./button-resume";
import { InitialLevel } from "./initial-level";
import { InitialRows } from "./initial-rows";
import { MenuScore } from "./score";
import { useOnUnpause } from "./use-on-unpause";

import { useGameContext } from "@/context/game";
import styles from "./menu.module.css";

const statuses = [GameStatus.IDLE, GameStatus.FINISHED, GameStatus.PAUSED];

export function GameMenu() {
  const {
    state: { countdown, status },
  } = useGameContext();

  useOnUnpause();

  if (countdown || (status && !statuses.includes(status))) return null;

  return (
    <Board isOpaque={status !== GameStatus.IDLE}>
      <div
        className={["flex flex-col gap-4", "short:flex-row short:gap-12 short:fixed short:inset-0 short:p-12"].join(
          " "
        )}
      >
        <div
          className={[
            "absolute inset-0 short:bg-board pointer-events-none",
            (!status || status !== GameStatus.IDLE) && "opacity-50",
          ].join(" ")}
        />
        <div
          className={["flex flex-col gap-4 tall:gap-8", "short:flex-1 short:justify-center", "relative z-10"].join(" ")}
        >
          {status && status !== GameStatus.IDLE && (
            <MenuScore className={[styles.scoreTop, "short:hidden"].join(" ")} />
          )}
          {status === GameStatus.PAUSED ? <ButtonResume /> : <ButtonPlay disabled={!status} />}
          <InitialLevel />
          <InitialRows />
        </div>
        <div
          className={["flex  flex-col gap-4 tall:gap-8", "short:flex-1 short:justify-center", "relative z-10"].join(
            " "
          )}
        >
          <MenuScore className="short:flex hidden" />
          <LightMode />

        </div>
      </div>
    </Board>
  );
}
