import { GameStatus } from "@/shared/constants/game";

import { useGameContext } from "@/context/game";
import styles from "./column-controls.module.css";
import { useControls } from "./use-controls";

export function ColumnControls(props: { side: "left" | "right" }) {
  const {
    state: { countdown, status },
  } = useGameContext();
  const controls = useControls();
  const { top, bottom } = controls[props.side];

  const isPlaying = status === GameStatus.PLAYING;

  return (
    <div
      className={[
        styles.root,
        isPlaying && styles["root-playing"],
        countdown || isPlaying ? "opacity-100" : "opacity-0",
        "transition-opacity",
      ].join(" ")}
    >
      <button
        className="flex w-full flex-2 items-center justify-center"
        disabled={!isPlaying}
        type="button"
        onClick={top.onClick}
      >
        {top.icon}
      </button>
      <button
        className="flex w-full flex-1 items-center justify-center"
        disabled={!isPlaying}
        type="button"
        onClick={bottom.onClick}
      >
        {bottom.icon}
      </button>
    </div>
  );
}
