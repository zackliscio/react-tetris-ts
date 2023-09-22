import React from 'react';

import { getShapeClassName, getShapeParams } from '@/utils/shape';
import { useTetrisContext } from '@/context/Context.utils';

export function Next(props: { isSmall?: boolean }) {
  const { state } = useTetrisContext();
  const { config, next } = state;
  const { i18N } = config;
  const { shape, rotate } = next;
  const params = getShapeParams(shape);
  const coords = params.coordsSmall[rotate];
  const className = getShapeClassName(shape);

  if (!coords) throw new Error(`Bad initial rotate: ${shape}/${rotate}`);

  return (
    <div className="flex flex-col relative h-full w-full">
      <div className="flex-1" />
      <div
        className={[
          'relative flex flex-wrap justify-center',
          !props.isSmall && 'h-10per',
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
