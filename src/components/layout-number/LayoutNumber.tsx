import { LayoutForm } from '@/components/layout-form/LayoutForm';

export function LayoutNumber(props: { isSmall?: boolean; label: string; number: number }) {
  const pad = 4 - props.number.toString().length;

  return (
    <LayoutForm isSmall={props.isSmall} label={props.label}>
      <div className={['flex items-center', 'lg:text-6xl text-4xl'].filter(Boolean).join(' ')}>
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
