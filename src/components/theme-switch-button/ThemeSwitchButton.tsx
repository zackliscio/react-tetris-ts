import { THEME_MODE } from '@/constants/colors';
import { CONFIG_ACTION } from '@/context/Context.actionTypes';
import { ThemeModePreference } from '@/context/Context.types';
import { useTetrisContext } from '@/context/Context.utils';
import { IconComputer } from '@/icons/IconComputer';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';

export function ThemeSwitchButton(props: { theme: ThemeModePreference }) {
  const { state, dispatch } = useTetrisContext();
  const { theme } = state;
  const isActive = theme.user === props.theme;

  function onChangeTheme() {
    dispatch({ type: CONFIG_ACTION.THEME_MODE, payload: props.theme });
  }

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
      onClick={() => onChangeTheme()}
    >
      {icon}
    </button>
  );
}
