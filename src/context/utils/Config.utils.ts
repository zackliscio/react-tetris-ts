import { i18n } from '@/constants/i18n';
import { TETRIS_THEME_MODE } from '@/constants/theme';
import { TetrisAppConfig } from '@/types/public';

export function getDefaultConfig(config?: Partial<TetrisAppConfig>): TetrisAppConfig {
  return {
    action: config?.action || {
      label: i18n.action,
      href: 'https://www.cibulka.codes',
    },
    i18N: config?.i18N || i18n,
    padding: 0,
    colors: config?.colors,
    theme: config?.theme || TETRIS_THEME_MODE.DARK,
  };
}
