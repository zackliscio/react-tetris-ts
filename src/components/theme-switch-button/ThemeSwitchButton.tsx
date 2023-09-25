import { TETRIS_THEME_MODE } from '@/constants/theme';
import { CONFIG_ACTION } from '@/context/Context.actionTypes';
import { useTetrisContext } from '@/context/Context.utils';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';
import { TetrisThemeModePreference } from '@/types/public';

export function ThemeSwitchButton(props: { theme: TetrisThemeModePreference }) {
  const { state, dispatch } = useTetrisContext();
  const { theme } = state;
  const isActive = theme.user === props.theme;

  function onChangeTheme() {
    dispatch({ type: CONFIG_ACTION.THEME_MODE, payload: props.theme });
  }

  let icon: JSX.Element;
  switch (props.theme) {
    case TETRIS_THEME_MODE.DARK:
      icon = <IconMoon />;
      break;
    case TETRIS_THEME_MODE.LIGHT:
      icon = <IconSun />;
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
