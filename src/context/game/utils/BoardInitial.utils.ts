import { TETRIS_AREA } from '@/constants/board';
import { getRandomNumberInRange, getShuffledArray } from '@/utils/random';

import { BoardRowCell, BoardRowCellInitial, Shape } from '../Game.types';
import { EDGE, SHAPE_INITIAL } from '@/constants/shape';

const { WIDTH, HEIGHT } = TETRIS_AREA;

function getOccupiedRow() {
  let row: BoardRowCellInitial[] = [];
  for (let i = 0; i < getRandomNumberInRange(6, 9); i += 1) {
    row[i] = SHAPE_INITIAL;
  }
  row = row.concat([...Array(WIDTH - row.length)].map(() => null));
  row = getShuffledArray(row);
  return row;
}

function getRow(isOccupied: boolean): BoardRowCell[] {
  const row = isOccupied ? getOccupiedRow() : Array(WIDTH).map(() => null);
  return [EDGE, ...row, EDGE];
}

function getInitialBoard(rows: number) {
  let result: BoardRowCell[] = [];
  for (let rowI = HEIGHT; rowI > 0; rowI -= 1) {
    const isOccupied = rowI < rows;
    result = [...result, ...getRow(isOccupied)];
  }
  return result;
}

export function getInitialGame(
  next: {
    shape: Shape;
    rotate: number;
  },
  config: {
    initialLevel: number;
    initialRows: number;
  },
) {
  return {
    isDrop: false,
    isFinished: false,
    level: config.initialLevel,
    placed: getInitialBoard(config.initialRows),
    rowsFull: null,
    rotate: next.rotate,
    score: 0,
    shape: next.shape,
    x: 0,
    y: 0,
  };
}
