import { THEME_MODE } from '@/constants/colors';
import { i18n } from '@/constants/i18n';

import { AppConfig } from '../Context.types';

export function getDefaultConfig(config?: Partial<AppConfig>): AppConfig {
  return {
    action: config?.action || {
      label: i18n.action,
      href: 'https://www.cibulka.codes',
    },
    i18N: config?.i18N || i18n,
    padding: 0,
    colors: config?.colors,
    isPersisted: true,
    theme: config?.theme || THEME_MODE.DARK,
  };
}
