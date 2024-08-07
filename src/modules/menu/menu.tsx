import { useGameState } from "@/context/game";
import { Board } from "@/shared/components/board";
import { LightMode } from "@/shared/components/light-mode";
import { GameStatus } from "@/shared/constants/game";

import { Author } from "@/shared/components/author/author";
import { ButtonPlay } from "./button-play";
import { ButtonResume } from "./button-resume";
import { InitialLevel } from "./initial-level";
import { InitialRows } from "./initial-rows";
import { MenuScore } from "./score";
import { useOnUnpause } from "./use-on-unpause";

import styles from "./menu.module.css";

const statuses = [GameStatus.IDLE, GameStatus.FINISHED, GameStatus.PAUSED];

export function GameMenu() {
  const { countdown, status } = useGameState();

  useOnUnpause();

  if (countdown || !statuses.includes(status)) return null;

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
            status !== GameStatus.IDLE && "opacity-50",
          ].join(" ")}
        />
        <div
          className={["flex flex-col gap-4 tall:gap-8", "short:flex-1 short:justify-center", "relative z-10"].join(" ")}
        >
          {status !== GameStatus.IDLE && <MenuScore className={[styles.scoreTop, "short:hidden"].join(" ")} />}
          {status === GameStatus.PAUSED ? <ButtonResume /> : <ButtonPlay />}
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
          <Author />
        </div>
      </div>
    </Board>
  );
}
