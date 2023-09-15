import { PropsWithChildren } from 'react';

import { Level } from '@/components/level/Level';
import { Score } from '@/components/score/Score';
import { Next } from '@/components/next/Next';

import { LayoutBackgrounds } from './components/LayoutBackgrounds';
import styles from './Layout.module.css';

export function Layout(props: PropsWithChildren) {
  return (
    <div
      className={[
        'flex flex-col',
        'absolute top-0 left-0',
        'w-full h-full overflow-hidden',
        'text-text bg-background_light',
        styles.layout,
      ].join(' ')}
    >
      <LayoutBackgrounds />
      <div className={['flex justify-between relative px-8 py-2', styles.layoutBar].join(' ')}>
        <Next isSmall />
        <Score isSmall />
      </div>
      <div className={['flex relative overflow-hidden', styles.layoutContent].join(' ')}>
        <div
          className={['relative z-10', 'flex flex-1 items-center justify-center', styles.left].join(
            ' ',
          )}
        >
          <Next />
        </div>
        <div className={['relative z-10 flex flex-col', styles.center].join(' ')}>
          {props.children}
        </div>
        <div
          className={[
            'relative z-10',
            'flex flex-1 items-center justify-center',
            styles.right,
          ].join(' ')}
        >
          <div className="flex flex-col gap-12">
            <Level />
            <Score />
          </div>
        </div>
      </div>
    </div>
  );
}
