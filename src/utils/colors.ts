import {
  BG_DARK,
  BG_LIGHT,
  THEME_DARK,
  THEME_LIGHT,
  THEME_MODE,
  Theme,
  ThemeColor,
} from '@/constants/colors';
import { useConfigContext } from '@/context/config/Config.utils';

export function useGetColor() {
  const { theme, colors } = useConfigContext();

  function getColor(color: ThemeColor) {
    let themeDefault: Theme;
    let userConfig: Partial<Theme> | null;
    switch (theme.user) {
      case THEME_MODE.LIGHT:
        themeDefault = THEME_LIGHT;
        userConfig = colors?.light || colors?.main || null;
        break;
      case THEME_MODE.SYSTEM:
        themeDefault = theme.system === THEME_MODE.LIGHT ? THEME_LIGHT : THEME_DARK;
        userConfig =
          (theme.system === THEME_MODE.LIGHT ? colors?.light : colors?.dark) ||
          colors?.main ||
          null;
        break;
      case THEME_MODE.DARK:
      default:
        themeDefault = THEME_DARK;
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
  const { colors } = useConfigContext();
  return colors?.dark?.background || BG_DARK;
}

export function useBackgroundLight() {
  const { colors } = useConfigContext();
  return colors?.light?.background || BG_LIGHT;
}
