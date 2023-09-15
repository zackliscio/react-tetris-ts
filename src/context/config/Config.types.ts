import { THEME_DARK, THEME_MODE } from '@/constants/colors';
import { i18n } from '@/constants/i18n';

export type Theme = typeof THEME_DARK;
export type ThemeColor = keyof typeof THEME_DARK;

export type AppConfig = {
  action?: {
    href?: string;
    icon?: JSX.Element;
    label: string;
    onClick?: () => void;
  };
  colors?: {
    main?: Partial<Theme>;
    dark?: Partial<Theme>;
    light?: Partial<Theme>;
  };
  i18N: typeof i18n;
  padding: string | number;
  theme: {
    user: typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT | typeof THEME_MODE.SYSTEM;
    selected: typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT;
    system: typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT;
    isChanged: boolean;
  };
};
