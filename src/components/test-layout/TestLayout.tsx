import { useRef } from 'react';

import { TETRIS_AREA } from '@/constants/board';

import { useWidthIfAspectRatioNotWorking } from './TestLayout.utils';

export function TestLayout() {
  const ref = useRef<HTMLDivElement>(null);
  const width = useWidthIfAspectRatioNotWorking(ref);

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="bg-black text-white flex justify-center h-12">topbar</div>
      <div className="flex flex-1">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex-1" />
          <div className="relative" style={{ height: '10%', aspectRatio: '2 / 1' }}>
            <div
              className="absolute grid"
              style={{ gridTemplateColumns: 'repeat(4, 1fr)', inset: 1 }}
            >
              {[...Array(8)].map((_el, i) => (
                <div className="relative" key={i}>
                  <div className="absolute bg-red-500" style={{ inset: 1 }} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1" />
        </div>
        <div
          className="relative"
          ref={ref}
          style={{
            aspectRatio: `${TETRIS_AREA.WIDTH / TETRIS_AREA.HEIGHT}`,
            width,
            maxHeight: 'calc(100vh - 3em)',
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII=" />
          <div
            className="absolute grid"
            style={{
              gridTemplateColumns: 'repeat(10, 1fr)',
              inset: 1,
            }}
          >
            {[...Array(10 * 20)].map((_el, i) => (
              <div className="relative" key={i}>
                <div
                  className="absolute bg-red-500 inset-0 flex items-center justify-center"
                  style={{ inset: 1 }}
                >
                  {i}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">C</div>
      </div>
    </div>
  );
}
