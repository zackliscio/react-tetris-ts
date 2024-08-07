import { useMemo } from "react";

import { useGameState } from "@/context/game";
import { Board } from "@/shared/components/board";
import { getBoardCells } from "@/shared/utils/get-board-cells";

import { SwipeOverlay } from "./swipe/swipe";
import { useKeyboardGame } from "./use-keyboard";
import { useTick } from "./use-tick";

export const Game = () => {
  const state = useGameState();
  const boardCells = useMemo(() => (state ? getBoardCells(state) : []), [state]);

  useTick();
  useKeyboardGame();

  return <Board cells={boardCells} classNameBoard="bg-board" overlay={<SwipeOverlay />} />;
};
