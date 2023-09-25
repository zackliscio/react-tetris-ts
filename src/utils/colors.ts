import {
  TETRIS_BG_DARK,
  TETRIS_BG_LIGHT,
  TETRIS_THEME_DARK,
  TETRIS_THEME_LIGHT,
  TETRIS_THEME_MODE,
} from '@/constants/theme';
import { useTetrisContext } from '@/context/Context.utils';
import { TetrisTheme, TetrisThemeColor } from '@/types/public';

export function useGetColor() {
  const { state } = useTetrisContext();
  const { theme } = state;
  const { colors } = state.config;

  function getColor(color: TetrisThemeColor) {
    let themeDefault: TetrisTheme;
    let userConfig: Partial<TetrisTheme> | null;
    switch (theme.user) {
      case TETRIS_THEME_MODE.LIGHT:
        themeDefault = TETRIS_THEME_LIGHT;
        userConfig = colors?.light || colors?.main || null;
        break;
      case TETRIS_THEME_MODE.DARK:
      default:
        themeDefault = TETRIS_THEME_DARK;
        userConfig = colors?.dark || colors?.main || null;
        break;
    }

    const userColor = userConfig && userConfig[color] ? userConfig[color] : null;
    if (userColor) return userColor;

    return themeDefault[color];
  }

  return getColor;
}

export function useBackgroundDark() {
  const { state } = useTetrisContext();
  return state.config.colors?.dark?.background || TETRIS_BG_DARK;
}

export function useBackgroundLight() {
  const { state } = useTetrisContext();
  return state.config.colors?.light?.background || TETRIS_BG_LIGHT;
}
