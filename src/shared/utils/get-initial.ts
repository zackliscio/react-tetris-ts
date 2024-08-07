import { BoardCellValue, GameContextValue } from "@/context/game/types";
import { Shape, ShapeOther } from "@/shared//constants/shape";
import { BOARD_SIZE } from "@/shared/constants/board";
import { GameStatus } from "@/shared/constants/game";

import { getNextState } from "./get-next-state";
import { getRandomInitialRow } from "./get-random";
import { getShapeHint } from "./get-shape-hint";

export function getInitialCells(initialRows: number) {
  let result: BoardCellValue[] = [];
  const emptyRows = BOARD_SIZE.height - initialRows;
  const emptyLine = [ShapeOther.EDGE, ...Array(BOARD_SIZE.width).map(() => null), ShapeOther.EDGE];

  for (let emptyRowIndex = 0; emptyRowIndex < emptyRows; emptyRowIndex += 1) {
    result = result.concat(emptyLine);
  }

  for (let fullRowIndex = 0; fullRowIndex < initialRows; fullRowIndex += 1) {
    result = result.concat(getRandomInitialRow());
  }

  return result;
}

type Params = {
  countdown: boolean;
  initialRows: number;
  shapeNext: Shape;
};

export function getInitialGame({ countdown, initialRows, shapeNext }: Params): GameContextValue {
  const cells = getInitialCells(initialRows);
  const state = getNextState({ countdown, shapeNext });
  const hint = getShapeHint({ ...state, cells });

  return {
    ...state,
    hint,
    cells,
    status: GameStatus.IDLE,
    cleared: 0,
  };
}
