import { THEME_MODE } from '@/constants/colors';
import { useTetrisContext } from '@/context/Context.utils';

export function LayoutBackgrounds() {
  const { state } = useTetrisContext();
  const { theme } = state;
  const { isChanged, selected } = theme;

  const isDark = selected === THEME_MODE.DARK;

  return (
    <>
      {!isChanged && <div className="absolute inset-0 bg-background" />}
      <div
        className={[
          'absolute inset-0 transition-transform duration-1000',
          'bg-background_dark',
          isDark ? 'translate-y-0' : '-translate-y-full',
        ].join(' ')}
      />
    </>
  );
}
