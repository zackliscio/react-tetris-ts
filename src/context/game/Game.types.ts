import { EDGE, SHAPE, SHAPE_INITIAL } from '@/constants/shape';

export type Shape = (typeof SHAPE)[keyof typeof SHAPE];
export type ShapeInitial = (typeof SHAPE_INITIAL)[keyof typeof SHAPE_INITIAL];

export type Edge = typeof EDGE;
export type BoardRowCellInitial = Edge | ShapeInitial | null;
export type BoardRowCell = Edge | Shape | ShapeInitial | null;
