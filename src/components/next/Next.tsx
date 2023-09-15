import React from 'react';

import { useConfigContext } from '@/context/config/Config.utils';
import { useGameContext } from '@/context/game/Game.utils';
import { getShapeClassName, getShapeParams } from '@/utils/shape';

export function Next(props: { isSmall?: boolean }) {
  const { i18N } = useConfigContext();
  const { state } = useGameContext();
  const { shape, rotate } = state.next;
  const params = getShapeParams(shape);
  const coords = params.coordsSmall[rotate];
  const className = getShapeClassName(shape);

  if (!coords) throw new Error(`Bad initial rotate: ${shape}/${rotate}`);

  return (
    <div className="flex flex-col relative h-full">
      <div className="flex-1" />
      <div
        className={[
          'relative flex flex-wrap justify-center',
          !props.isSmall && 'lg:h-10per bg:h-8per h-7per',
          props.isSmall && 'h-12 w-24',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {[...Array(8)].map((_el, i) => (
          <React.Fragment key={i}>
            <div className="relative aspect-square h-1/2" key={i}>
              <span
                className={[
                  'absolute inset-0.5',
                  'flex items-center justify-center',
                  coords.includes(i) ? className : 'bg-board',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
              {i === 0 && !props.isSmall && (
                <strong className="absolute -top-12">{i18N.next}</strong>
              )}
            </div>
            {i === 3 && <div style={{ height: 0, width: '100%' }} />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex-1" />
    </div>
  );
}
