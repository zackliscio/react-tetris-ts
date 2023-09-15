import { THEME_MODE } from '@/constants/colors';
import { useConfigContext } from '@/context/config/Config.utils';

export function LayoutBackgrounds() {
  const config = useConfigContext();
  const { theme } = config;
  const isDark = theme.selected === THEME_MODE.DARK;
  const { isChanged } = config.theme;

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
