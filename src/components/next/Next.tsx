import { getShapeClassName, getShapeParams } from '@/utils/shape';
import { useTetrisContext } from '@/context/Context.utils';

export function Next(props: { height: string; isSmall?: boolean }) {
  const { state } = useTetrisContext();
  const { config, next } = state;
  const { i18N } = config;
  const { shape, rotate } = next;
  const params = getShapeParams(shape);
  const coords = params.coordsSmall[rotate];
  const className = getShapeClassName(shape);

  if (!coords) throw new Error(`Bad initial rotate: ${shape}/${rotate}`);

  return (
    <div className="relative" style={{ height: props.height, aspectRatio: '2 / 1' }}>
      {!props.isSmall && <strong className="absolute -top-12">{i18N.next}</strong>}
      <div className="absolute grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', inset: 2 }}>
        {[...Array(8)].map((_el, i) => (
          <div className="relative" key={i}>
            <div
              className={['absolute', coords.includes(i) ? className : 'bg-board']
                .filter(Boolean)
                .join(' ')}
              style={{ inset: 2 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
