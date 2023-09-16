import { LayoutForm } from '@/components/layout-form/LayoutForm';

export function LayoutNumber(props: {
  className?: string;
  isSmall?: boolean;
  label: string;
  number: number;
}) {
  const pad = 4 - props.number.toString().length;

  return (
    <LayoutForm className={props.className} isSmall={props.isSmall} label={props.label}>
      <div
        className={[
          'flex items-center',
          !props.isSmall && 'text-6xl',
          props.isSmall &&
            '@4xl/layout:text-6xl @lg/layout:text-4xl @bg/layout:text-3xl @md/layout:text-2xl text-xl',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span className="opacity-50">
          {[...Array(pad)].map((_val, i) => (
            <span key={i}>0</span>
          ))}
        </span>
        <span>{props.number}</span>
      </div>
    </LayoutForm>
  );
}
