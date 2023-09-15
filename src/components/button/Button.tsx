import { PropsWithChildren } from 'react';

function ButtonWrap(
  props: PropsWithChildren & { className?: string; href?: string; onClick?: () => void },
) {
  return props.href ? (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  ) : (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function Button(
  props: PropsWithChildren & {
    className?: string;
    href?: string;
    icon?: JSX.Element;
    onClick?: () => void;
  },
) {
  return (
    <ButtonWrap className={props.className || 'w-full'} href={props.href} onClick={props.onClick}>
      <div
        className={[
          'flex items-center gap-4',
          'px-9 py-3',
          'rounded-lg',
          'border border-b-4',
          'bg-button border-button_shade text-button_text',
        ].join(' ')}
      >
        {props.icon && <span className="flex-shrink-0 w-8 h-8">{props.icon}</span>}
        <span className="text-xl md:text-2xl font-bold whitespace-nowrap">{props.children}</span>
      </div>
    </ButtonWrap>
  );
}
