import { PropsWithChildren } from 'react';
import { TETRIS_AREA } from '@/constants/board';
import { isLeftEdge, isRightEdge } from './Board.utils';

const { WIDTH, HEIGHT } = TETRIS_AREA;
const WIDTH_PADDED = WIDTH + 2;

export function Board(
  props: PropsWithChildren & {
    className?: string;
    classNames?: string[];
    classNameCell?: string;
    isDown?: boolean;
    isIndexShown?: boolean;
  },
) {
  return (
    <div
      className={[
        'absolute grid',
        props.className,
        'transition-all',
        props.isDown ? 'translate-y-screen' : 'translate-y-0',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        gridTemplateColumns: 'repeat(10, 1fr)',
        inset: 2,
      }}
    >
      {[...Array(WIDTH_PADDED * HEIGHT)].map((_el, i) => {
        if (isLeftEdge(i) || isRightEdge(i)) return null;
        return (
          <div className="relative" key={i}>
            <div
              className={[
                'absolute',
                props.isIndexShown && 'flex items-center justify-center',
                props.classNames ? props.classNames[i] : props.classNameCell,
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ inset: 2 }}
            >
              {props.isIndexShown && i}
            </div>
          </div>
        );
      })}
      {props.children && (
        <div className={['absolute inset-0', 'flex items-center justify-center'].join(' ')}>
          {props.children}
        </div>
      )}
    </div>
  );
}
