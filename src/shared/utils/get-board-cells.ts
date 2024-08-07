import { GameContextValue } from "@/context/game/types";
import { ShapeOther } from "@/shared/constants/shape";

import { getCellIndexesByRow } from "./get-cell-indexes";
import { getShapeCoords } from "./get-shape-coords";
import { placeShape } from "./place-shape";

export function getBoardCells(state: GameContextValue) {
  let result = state.cells;

  // Place hint
  if (state.hint) {
    result = placeShape(
      {
        shape: ShapeOther.HINT,
        coords: state.hint,
      },
      result,
      false
    );
  }

  // Place current shape
  const currentShapeCoords = getShapeCoords({}, state);
  if (currentShapeCoords) {
    result = placeShape(
      {
        shape: state.shape,
        coords: currentShapeCoords,
      },
      result,
      true
    );
  }

  // Mark full rows
  if (state.fullRowIndexes) {
    const fullCellIndexes = state.fullRowIndexes.map((rowIndex) => getCellIndexesByRow(rowIndex)).flat();
    result = placeShape(
      {
        shape: ShapeOther.FULL,
        coords: fullCellIndexes,
      },
      result,
      true
    );
  }

  return result;
}
