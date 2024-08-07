import { GameBoardState, GameContextValue } from "@/context/game/types";
import { BOARD_AREA_WITH_EDGES, BOARD_WIDTH_WITH_EDGES } from "@/shared/constants/board";
import { Shape, SHAPES } from "@/shared/constants/shape";

import { isEdge } from "./is-edge";

function isCoordsLegal(coords: number[], cells?: GameContextValue["cells"]) {
  for (const coord of coords) {
    // Coord crossed bottom edge
    if (coord > BOARD_AREA_WITH_EDGES) {
      return false;
    }
    // Coord already occupied
    if (cells?.[coord]) {
      return false;
    }
    // Coord crossed edge
    if (!cells && isEdge(coord)) {
      return false;
    }
  }
  return true;
}

type ChangeShapeCoordsPayload = {
  rotate?: number;
  shape?: Shape;
  x?: number;
  y?: number;
};

export function getShapeCoords(payload: ChangeShapeCoordsPayload, game: GameBoardState, checkIfLegal = true) {
  const shape = payload?.shape || game.shape;
  const x = typeof payload?.x === "number" ? payload.x : game.x;
  const y = typeof payload?.y === "number" ? payload.y : game.y;
  const rotate = typeof payload?.rotate === "number" ? payload.rotate : game.rotate;

  const coords = SHAPES[shape][rotate];
  const coordsModified = coords.map((coord) => coord + x + y * BOARD_WIDTH_WITH_EDGES);

  if (!checkIfLegal) return coordsModified;
  return isCoordsLegal(coordsModified, game.cells) ? coordsModified : null;
}

export function getShapeCoordsAlways(payload: ChangeShapeCoordsPayload, game: GameContextValue) {
  return getShapeCoords(payload, game, false) as number[];
}
