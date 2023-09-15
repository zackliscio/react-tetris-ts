export const SHAPE = {
  I: 'I',
  J: 'J',
  L: 'L',
  O: 'O',
  S: 'S',
  T: 'T',
  Z: 'Z',
} as const;

export const EDGE = 'EDGE';

export const SHAPE_INITIAL = 'X';

export const TETRIS_SHAPE_PARAMS = [
  {
    shape: SHAPE.I,
    coords: [
      [4, 5, 6, 7],
      [5, 17, 29, 41],
    ],
    coordsSmall: [[4, 5, 6, 7]],
  },
  {
    shape: SHAPE.J,
    coords: [
      [4, 16, 17, 18],
      [5, 6, 17, 29],
      [4, 5, 6, 18],
      [5, 17, 28, 29],
    ],
    coordsSmall: [[1, 5, 6, 7], null, [1, 2, 3, 7], null],
  },
  {
    shape: SHAPE.L,
    coords: [
      [6, 16, 17, 18],
      [5, 17, 29, 30],
      [5, 6, 7, 17],
      [5, 6, 18, 30],
    ],
    coordsSmall: [[3, 5, 6, 7], null, [1, 2, 3, 5], null],
  },
  {
    shape: SHAPE.O,
    coords: [[5, 6, 17, 18]],
    coordsSmall: [[1, 2, 5, 6]],
  },
  {
    shape: SHAPE.S,
    coords: [
      [6, 7, 17, 18],
      [5, 17, 18, 30],
    ],
    coordsSmall: [[2, 3, 5, 6], null],
  },
  {
    shape: SHAPE.T,
    coords: [
      [5, 16, 17, 18],
      [5, 17, 18, 29],
      [4, 5, 6, 17],
      [5, 16, 17, 29],
    ],
    coordsSmall: [[1, 2, 3, 6], null, [2, 5, 6, 7], null],
  },
  {
    shape: SHAPE.Z,
    coords: [
      [5, 6, 18, 19],
      [6, 17, 18, 29],
    ],
    coordsSmall: [[1, 2, 6, 7], null],
  },
];
