import { TETRIS_AREA } from '@/constants/board';
import { EDGE } from '@/constants/shape';
import { BoardRowCell } from '@/context/game/Game.types';

const { WIDTH, HEIGHT } = TETRIS_AREA;
const WIDTH_PADDED = WIDTH + 2;

/* Indexes */
function getFirstRowIndex(row: number, withEdge = true) {
  let result = row * WIDTH_PADDED;
  if (!withEdge) result = result + 1;
  return result;
}

function getLastRowIndex(row: number, withEdge = true) {
  let result = getFirstRowIndex(row) + WIDTH_PADDED;
  if (!withEdge) result = result - 1;
  return result;
}

function getBoardEndIndex() {
  return WIDTH_PADDED * HEIGHT;
}

export function getRowIndexes(row: number) {
  const start = getFirstRowIndex(row, false);
  const result = [...Array(WIDTH)].map((_el, i) => i + start);
  return result;
}

export function getRowIndexesMultiple(rows: number[]) {
  let result: number[] = [];
  rows.forEach((row) => {
    result = [...result, ...getRowIndexes(row)];
  });
  return result;
}

/* Full rows */

export function getFullRows(placed: BoardRowCell[]) {
  let result: number[] = [];
  for (let i = 0; i < HEIGHT; i += 1) {
    const start = i * WIDTH_PADDED;
    const end = start + WIDTH_PADDED;
    const isFull = placed.slice(start, end).filter(Boolean).length === WIDTH_PADDED;
    if (isFull) result = [...result, i];
  }
  return result.length > 0 ? result : null;
}

export function clearFullRows(rowsToClear: number[], placed: BoardRowCell[]) {
  let result = placed;
  const emptyRow: BoardRowCell[] = [EDGE, ...Array(WIDTH).map(() => null), EDGE];
  rowsToClear.forEach((row) => {
    const before = result.slice(0, getLastRowIndex(row - 1));
    const after = result.slice(getFirstRowIndex(row + 1), getBoardEndIndex());
    result = [...emptyRow, ...before, ...after];
  });
  return result;
}
