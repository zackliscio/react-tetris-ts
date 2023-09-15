import {
  TETRIS_ROWS_IN_LEVEL,
  TETRIS_SPEED_INITIAL,
  TETRIS_SPEED_LEVEL_INCREASE,
} from '@/constants/game';

export function getScore(score: number, initialLevel: number, initialRows: number): number {
  const initialLevelModifier = initialLevel - 1;
  return score * (initialLevelModifier + initialRows);
}

export function getLevel(score: number, initialLevel: number) {
  return Math.floor(score / TETRIS_ROWS_IN_LEVEL) + initialLevel;
}

export default function getSpeed(score: number, initialLevel: number): number {
  const level = getLevel(score, initialLevel);
  return TETRIS_SPEED_INITIAL - level * TETRIS_SPEED_LEVEL_INCREASE;
}
