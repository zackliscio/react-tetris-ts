import { THEME_MODE } from '@/constants/colors';
import { useConfigContext } from '@/context/config/Config.utils';
import { IconComputer } from '@/icons/IconComputer';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';

export function ThemeSwitchButton(props: {
  theme: typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT | typeof THEME_MODE.SYSTEM;
}) {
  const { theme, setThemeMode } = useConfigContext();
  const isActive = theme.user === props.theme;

  let icon: JSX.Element;
  switch (props.theme) {
    case THEME_MODE.DARK:
      icon = <IconMoon />;
      break;
    case THEME_MODE.LIGHT:
      icon = <IconSun />;
      break;
    case THEME_MODE.SYSTEM:
      icon = <IconComputer />;
      break;
    default:
      throw new Error(`Unknown mode ${props.theme}.`);
  }

  return (
    <button
      type="button"
      className={[
        'flex w-10',
        isActive ? 'text-shape_z' : 'text-text',
        isActive ? 'opacity-100' : 'opacity-50',
      ].join(' ')}
      onClick={() => setThemeMode(props.theme)}
    >
      {icon}
    </button>
  );
}
