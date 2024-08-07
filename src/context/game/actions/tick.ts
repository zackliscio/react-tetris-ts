import { GameStatus } from "@/shared/constants/game";
import { ShapeOther } from "@/shared/constants/shape";
import { clearFullRows } from "@/shared/utils/clear-full-rows";
import { getFullRowIndexes } from "@/shared/utils/get-full-row-indexes";
import { getNextState } from "@/shared/utils/get-next-state";
import { getShapeCoords, getShapeCoordsAlways } from "@/shared/utils/get-shape-coords";
import { getStateWithHint } from "@/shared/utils/get-shape-hint";
import { placeShape } from "@/shared/utils/place-shape";

import { GameContextValue } from "../types";

export function tick(state: GameContextValue) {
  // Clearing rows
  if (state.fullRowIndexes) {
    return {
      ...state,
      cells: clearFullRows(state.fullRowIndexes, state.cells),
      cleared: state.cleared + state.fullRowIndexes.length,
      dropping: false,
      hint: null,
      fullRowIndexes: null,
    };
  }

  // Falls to next row
  const yCurrent = state.y + 1;
  const movedCoords = getShapeCoords({ y: yCurrent }, state);

  if (movedCoords) {
    return getStateWithHint({
      ...state,
      y: yCurrent,
    });
  }

  const stateNext = getNextState({ shapeNext: state.shapeNext });
  const currentCoordsValid = getShapeCoords({}, state);

  // Placing valid
  if (currentCoordsValid) {
    const cells = placeShape(
      {
        shape: state.shape,
        coords: currentCoordsValid,
      },
      state.cells
    );
    return {
      ...state,
      ...stateNext,
      cells,
      hint: null,
      fullRowIndexes: getFullRowIndexes(cells),
    };
  }

  // Placing invalid
  const currentCoordsInvalid = getShapeCoordsAlways({}, state);
  return {
    ...state,
    ...stateNext,
    cells: placeShape(
      {
        shape: ShapeOther.INITIAL,
        coords: currentCoordsInvalid,
      },
      state.cells,
      true
    ),
    status: GameStatus.FINISHED,
  };
}
