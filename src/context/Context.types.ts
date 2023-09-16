import { THEME_DARK, THEME_MODE } from '@/constants/colors';
import { i18n } from '@/constants/i18n';
import { EDGE, SHAPE, SHAPE_INITIAL } from '@/constants/shape';

export type Shape = (typeof SHAPE)[keyof typeof SHAPE];
export type ShapeInitial = (typeof SHAPE_INITIAL)[keyof typeof SHAPE_INITIAL];

export type Edge = typeof EDGE;
export type BoardRowCellInitial = Edge | ShapeInitial | null;
export type BoardRowCell = Edge | Shape | ShapeInitial | null;

export type Theme = typeof THEME_DARK;
export type ThemeColor = keyof typeof THEME_DARK;
export type ThemeModePreference =
  | typeof THEME_MODE.DARK
  | typeof THEME_MODE.LIGHT
  | typeof THEME_MODE.SYSTEM;
export type ThemeModeSelected = typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT;

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
  isPersisted: boolean;
  padding: string | number;
  theme: ThemeModePreference;
};
