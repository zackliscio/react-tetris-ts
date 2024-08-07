import { Shape } from "@/shared/constants/shape";

type Params = {
  countdown?: boolean;
  rotate: number;
  rotateNext: number;
  shape: Shape;
  shapeNext: Shape;
};

export function getNextState({ countdown, rotate, rotateNext, shape, shapeNext }: Params) {
  return {
    countdown: Boolean(countdown),
    fullRowIndexes: null,
    shape,
    shapeNext,
    rotate,
    rotateNext,
    dropping: false,
    y: 0,
    x: 0,
  };
}
