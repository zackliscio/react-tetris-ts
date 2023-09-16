export const TETRIS_STATUS = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  COUNTDOWN: 'COUNTDOWN',
} as const;

export type TetrisStatus = (typeof TETRIS_STATUS)[keyof typeof TETRIS_STATUS];

export const TETRIS_COUNTDOWN_S = 3;

export const ROWS_MIN = 0;
export const ROWS_MAX = 10;

export const LEVEL_MIN = 1;
export const LEVEL_MAX = 10;

export const TETRIS_SPEED_INITIAL = 500;
export const TETRIS_SPEED_DROP = 50;
export const TETRIS_ROWS_IN_LEVEL = 15;
export const TETRIS_SPEED_LEVEL_INCREASE = 27;
