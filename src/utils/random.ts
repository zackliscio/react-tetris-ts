import { Shape } from '@/context/game/Game.types';

import { getShapeParams } from './shape';

export function getShuffledArray<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function getRandomArrayValue<T>(arr: T[]): T {
  return getShuffledArray(arr)[0];
}

export function getRandomNumberInRange(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomRotate(shape: Shape) {
  const params = getShapeParams(shape);

  let legalRotates: number[] = [];
  params.coordsSmall.forEach((coords, i) => {
    if (coords) legalRotates = [...legalRotates, i];
  });

  const result = getRandomArrayValue(legalRotates);
  if (typeof result !== 'number') throw new Error(`getRandomRotate: non-number value.`);
  return result;
}
