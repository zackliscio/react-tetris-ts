import { TETRIS_AREA } from '../../constants/board';

const { WIDTH } = TETRIS_AREA;

export function isLeftEdge(i: number, width?: number) {
  const widthPadded = (width || WIDTH) + 2;
  return i % widthPadded === 0;
}

export function isRightEdge(i: number, width?: number) {
  const widthPadded = (width || WIDTH) + 2;
  return (i + 1) % widthPadded === 0;
}
