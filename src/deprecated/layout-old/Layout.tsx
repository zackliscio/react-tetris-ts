import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { Level } from '@/components/level/Level';
import { Score } from '@/components/score/Score';
import { Next } from '@/components/next/Next';

import { LayoutTopBar } from './components/LayoutTopBar';
import { LayoutBackgrounds } from './components/LayoutBackgrounds';
import styles from './Layout.module.css';

const MIN_RATIO = 0.443;

export function Layout(props: PropsWithChildren) {
  const [isThin, setIsThin] = useState<undefined | boolean>(undefined);

  const wrapEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handler() {
      if (wrapEl.current) {
        setIsThin(wrapEl.current.clientWidth / wrapEl.current.clientHeight <= MIN_RATIO);
      }
    }

    handler();
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <div
      className={[
        '@container/layout',
        'flex flex-col',
        'absolute top-0 left-0',
        'w-full h-full overflow-hidden',
        'text-text bg-background_light',
        styles.layout,
        isThin && 'layout-thin',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={wrapEl}
    >
      <LayoutBackgrounds />
      <LayoutTopBar
        className={['relative flex justify-between px-8 py-2', styles.layoutBar].join(' ')}
      />
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
