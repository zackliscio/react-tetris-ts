import { useMemo } from 'react';

import { Board } from '@/components/board/Board';
import { TETRIS_STATUS } from '@/constants/game';
import { useTetrisContext } from '@/context/Context.utils';
import { GameKeyboardEffects } from '@/sections/game-effects/GameKeyboardEffects';
import { GameTick } from '@/sections/game-effects/GameTick';
import { GameSwipable } from '@/sections/game-effects/GameSwipable';
import { getRowIndexesMultiple } from '@/utils/board';
import { getShapeClassName, isShapeInvalid, recalculateShape } from '@/utils/shape';

export function BoardGame() {
  const { state } = useTetrisContext();
  const isPlaying = state.status === TETRIS_STATUS.PLAYING;

  const { shape, placed, rotate, rowsFull, x, y } = state.game || {};

  const classNames = useMemo(() => {
    if (
      !shape ||
      !placed ||
      typeof rotate !== 'number' ||
      typeof x !== 'number' ||
      typeof y !== 'number'
    ) {
      return undefined;
    }

    const result: string[] = [];

    // Placed
    placed.forEach((cell, i) => {
      if (cell) {
        const className = getShapeClassName(cell);
        if (className) result[i] = className;
      }
    });

    // Current shape
    const coordsCurrent = recalculateShape(shape, rotate, x, y);
    const isInvalid = isShapeInvalid(coordsCurrent, placed);
    coordsCurrent.forEach((coord) => {
      result[coord] = isInvalid ? 'cell-initial' : getShapeClassName(shape);
    });

    // Cleared
    const cleared = rowsFull ? getRowIndexesMultiple(rowsFull) : [];
    cleared.forEach((coord) => {
      result[coord] = 'bg-text';
    });

    return result;
  }, [shape, placed, rotate, rowsFull, x, y]);

  return (
    <>
      {isPlaying && (
        <>
          <GameTick />
          <GameKeyboardEffects />
        </>
      )}
      <Board classNames={classNames} />
      {isPlaying && <GameSwipable />}
    </>
  );
}
