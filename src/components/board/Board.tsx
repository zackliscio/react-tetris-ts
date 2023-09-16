import { PropsWithChildren } from 'react';

import { TETRIS_AREA } from '@/constants/board';

import { isLeftEdge, isRightEdge } from './Board.utils';
import styles from './Board.module.css';

const { WIDTH, HEIGHT } = TETRIS_AREA;

console.log((WIDTH + 2) * HEIGHT);

export function Board(
  props: PropsWithChildren & {
    className?: string;
    classNameCell?: string;
    classNames?: string[];
    height?: number;
    isIndexShown?: boolean;
    isNoBorder?: boolean;
    isTransparent?: boolean;
    isDown?: boolean;
    isAlignBottom?: boolean;
    isVisible?: boolean;
    isRelative?: boolean;
    width?: number;
  },
) {
  const width = props.width || WIDTH;
  const widthPadded = width + 2;
  const height = props.height || HEIGHT;

  return (
    <div
      className={[
        props.className,
        'glob-board',
        !props.isRelative && 'absolute top-0 left-0 w-full',
        props.isDown ? 'translate-y-screen' : 'translate-y-0',
        !props.isVisible && 'hidden',
        'transition-all',
        props.isTransparent ? 'opacity-20' : 'opacity-100',
        styles.board,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {[...Array(widthPadded * height)].map((_cell, i) => {
        if (isLeftEdge(i, width)) return null;
        if (isRightEdge(i, width)) return <div key={i} className="clear-both" />;

        return (
          <div
            className={[
              'relative float-left aspect-square',
              'h-5per min-h-1.25',
              'glob-board_cell',
            ].join(' ')}
            key={i}
          >
            <span
              className={[
                'absolute inset-0.5',
                'flex items-center justify-center',
                props.classNameCell,
                props.classNames ? props.classNames[i] : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {props.isIndexShown && i}
            </span>
          </div>
        );
      })}
      {props.children && (
        <div
          className={['absolute inset-0', 'flex flex-col items-center justify-center'].join(' ')}
        >
          {props.children}
        </div>
      )}
    </div>
  );
}
