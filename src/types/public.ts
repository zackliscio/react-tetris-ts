import { i18n } from '@/constants/i18n';
import { TETRIS_THEME_DARK, TETRIS_THEME_MODE } from '@/constants/theme';

/* Theme */
/* ================================================= */

export type TetrisTheme = typeof TETRIS_THEME_DARK;
export type TetrisThemeColor = keyof typeof TETRIS_THEME_DARK;
export type TetrisThemeModeSelected =
  | typeof TETRIS_THEME_MODE.DARK
  | typeof TETRIS_THEME_MODE.LIGHT;

/* i18n */
/* ================================================= */

export type TetrisI18N = typeof i18n;

/* AppConfig */
/* ================================================= */

export type TetrisThemeModePreference =
  | typeof TETRIS_THEME_MODE.DARK
  | typeof TETRIS_THEME_MODE.LIGHT
  | typeof TETRIS_THEME_MODE.SYSTEM;

export type TetrisAppConfig = {
  action?: {
    href?: string;
    icon?: JSX.Element;
    label: string;
    onClick?: () => void;
  };
  colors?: {
    main?: Partial<TetrisTheme>;
    dark?: Partial<TetrisTheme>;
    light?: Partial<TetrisTheme>;
  };
  i18N: TetrisI18N;
  isPersisted: boolean;
  padding: string | number;
  theme: TetrisThemeModeSelected;
};
