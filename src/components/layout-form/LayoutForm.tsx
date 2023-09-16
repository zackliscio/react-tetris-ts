import { PropsWithChildren } from 'react';

export function LayoutForm(
  props: PropsWithChildren & {
    className?: string;
    isSmall?: boolean;
    label: string;
    isNotForm?: boolean;
  },
) {
  const Wrap = props.isNotForm ? 'div' : 'label';
  return (
    <Wrap
      className={[props.className, 'flex gap-3', !props.isSmall ? 'flex-col' : 'items-center']
        .filter(Boolean)
        .join(' ')}
    >
      <strong>{props.label}</strong>
      <div className="flex items-center gap-4 w-full">{props.children}</div>
    </Wrap>
  );
}
