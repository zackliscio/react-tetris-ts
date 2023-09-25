import { PropsWithChildren, useRef } from 'react';

import { Level } from '@/components/level/Level';
import { Next } from '@/components/next/Next';
import { Score } from '@/components/score/Score';
import { TETRIS_AREA } from '@/constants/board';

import { useWidthIfAspectRatioNotWorking } from './Layout.utils';
import styles from './Layout.module.css';

export function Layout(props: PropsWithChildren & { className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const width = useWidthIfAspectRatioNotWorking(ref);

  return (
    <div className={props.className} style={{ position: 'absolute', inset: 0 }}>
      <div
        className={[
          'absolute inset-0 flex flex-col',
          '@container/layout',
          'text-text bg-background',
        ].join(' ')}
      >
        <div className={['flex items-center justify-between', 'px-4', styles.topBar].join(' ')}>
          <Next height="3em" />
          <Score isSmall />
          <Level isSmall />
        </div>
        <div className={['flex flex-1', styles.wrap].join(' ')}>
          <div className={['flex flex-1 items-center justify-center', styles.left].join(' ')}>
            <Next height="10%" />
          </div>
          <div
            className={[styles.center, 'relative'].join(' ')}
            ref={ref}
            style={{
              aspectRatio: `${TETRIS_AREA.WIDTH / TETRIS_AREA.HEIGHT}`,
              width,
            }}
          >
            {props.children}
          </div>
          <div
            className={[
              'flex flex-col gap-12 flex-1 items-center justify-center',
              styles.right,
            ].join(' ')}
          >
            <Level />
            <Score />
          </div>
        </div>
      </div>
    </div>
  );
}
