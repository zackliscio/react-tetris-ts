import { LayoutForm } from '../layout-form/LayoutForm';

import styles from './Range.module.css';

export function Range(props: {
  className?: string;
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <LayoutForm label={props.label}>
      <div className="flex items-center gap-4 w-full">
        <input
          className={['flex-1', styles.range].join(' ')}
          value={props.value}
          type="range"
          min={props.min}
          max={props.max}
          onChange={(e) => props.onChange(parseInt(e.target.value))}
        />
        <div className={['w-6 flex justify-end', 'text-2xl'].join(' ')}>{props.value}</div>
      </div>
    </LayoutForm>
  );
}
