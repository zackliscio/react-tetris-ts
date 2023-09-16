import { TETRIS_AREA } from '@/constants/board';
import { TETRIS_SHAPE_PARAMS } from '@/constants/shape';
import { BoardRowCell, Edge, Shape, ShapeInitial } from '@/context/Context.types';

const WIDTH_PADDED = TETRIS_AREA.WIDTH + 2;
const MAX_COORD = WIDTH_PADDED * TETRIS_AREA.HEIGHT;

export function getShapeParams(shape: Shape | ShapeInitial) {
  const params = TETRIS_SHAPE_PARAMS.find((s) => s.shape === shape);
  if (!params) throw new Error(`No shape ${shape} found.`);
  return params;
}

export function recalculateShape(shape: Shape, rotate: number, x: number, y: number) {
  const { coords } = getShapeParams(shape);
  const coordsRotated = coords[rotate];
  const coordsMoved = coordsRotated.map((num) => num + x + y * WIDTH_PADDED);
  return coordsMoved;
}

export function isShapeInvalid(coords: number[], placed: BoardRowCell[]) {
  return coords.find((coord) => coord < 0 || coord >= MAX_COORD || placed[coord]) !== undefined;
}

export function getShapeClassName(shape: Shape | ShapeInitial | Edge) {
  switch (shape) {
    case 'EDGE':
      return '';
    case 'I':
      return `bg-shape_i`;
    case 'J':
      return `bg-shape_j`;
    case 'L':
      return `bg-shape_l`;
    case 'O':
      return `bg-shape_o`;
    case 'S':
      return `bg-shape_s`;
    case 'T':
      return `bg-shape_t`;
    case 'Z':
      return `bg-shape_z`;
    case 'X':
      return `bg-background cell-initial`;
    default:
      throw new Error(``);
  }
}
