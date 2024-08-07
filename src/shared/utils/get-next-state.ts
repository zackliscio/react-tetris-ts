import { Shape } from "@/shared/constants/shape";

import { getRandomRotate, getRandomShape } from "./get-random";

type Params = {
  countdown?: boolean;
  shapeNext: Shape;
};

export function getNextState({ countdown, shapeNext }: Params) {
  const shapeAfterNext = getRandomShape();
  return {
    countdown: Boolean(countdown),
    fullRowIndexes: null,
    shape: shapeNext,
    shapeNext: shapeAfterNext,
    rotate: getRandomRotate(shapeNext),
    rotateNext: getRandomRotate(shapeAfterNext),
    dropping: false,
    y: 0,
    x: 0,
  };
}
