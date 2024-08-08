import { GameStatus } from "@/shared/constants/game";

import { useGameContext } from "@/context/game";
import styles from "./column-controls.module.css";
import { useControls } from "./use-controls";

export function ColumnControls(props: { side: "left" | "right" }) {
  const {
    state: { countdown, status },
  } = useGameContext();
  const controls = useControls();

  const move = controls[props.side];

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
        className="flex w-full flex-1 items-center justify-center"
        disabled={!isPlaying}
        type="button"
        onClick={controls.rotate.onClick}
      >
        {controls.rotate.icon}
      </button>
      <button
        className={["flex w-full flex-1 items-center justify-center", "border-t border-b border-board"].join(" ")}
        disabled={!isPlaying}
        type="button"
        onClick={move.onClick}
      >
        {move.icon}
      </button>
      <button
        className="flex w-full flex-1 items-center justify-center"
        disabled={!isPlaying}
        type="button"
        onClick={controls.drop.onClick}
      >
        {controls.drop.icon}
      </button>
    </div>
  );
}
