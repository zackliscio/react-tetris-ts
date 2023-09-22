export const TETRIS_THEME_MODE = {
  DARK: 'THEME_MODE_DARK',
  LIGHT: 'THEME_MODE_LIGHT',
  SYSTEM: 'THEME_MODE_SYSTEM',
};

export const TETRIS_BG_DARK = '#111827';
export const TETRIS_BG_LIGHT = '#f3f4f6';

export const TETRIS_THEME_DARK = {
  background: TETRIS_BG_DARK,
  board: '#1f2937',
  button: '#cbd5e1',
  button_shade: '#475569',
  button_text: '#1f2937',
  outline: '#f97316',
  text: '#d1d5db',
  shape_i: '#dc2626',
  shape_j: '#f97316',
  shape_l: '#14b8a6',
  shape_o: '#0ea5e9',
  shape_s: '#8b5cf6',
  shape_t: '#ec4899',
  shape_z: '#eab308',
};

export const TETRIS_THEME_LIGHT = {
  ...TETRIS_THEME_DARK,
  background: TETRIS_BG_LIGHT,
  board: '#d4d4d8',
  button: '#cbd5e1',
  button_shade: '#475568',
  button_text: '#1f2937',
  text: '#1f2937',
};
