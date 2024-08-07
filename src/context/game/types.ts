import { GameStatus } from "@/shared/constants/game";
import { Shape, ShapeOther } from "@/shared/constants/shape";

import { GameAction } from "./action-types";

export type BoardCellValue = Shape | ShapeOther | null;

export type GameBoardState = {
  cells: BoardCellValue[];
  rotate: number;
  shape: Shape;
  y: number;
  x: number;
};

export type GameContextValue = GameBoardState & {
  cleared: number;
  countdown: boolean;
  dropping: boolean;
  fullRowIndexes: number[] | null;
  hint: number[] | null;
  status: GameStatus;
  shapeNext: Shape;
  rotateNext: number;
};

export type GameDispatch = React.Dispatch<GameAction>;
