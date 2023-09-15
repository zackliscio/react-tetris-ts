import { useContext } from 'react';

import { i18n } from '@/constants/i18n';
import { THEME_MODE } from '@/constants/colors';

import { ConfigContext } from './Config.context';
import { AppConfig } from './Config.types';

export function getDefaultConfig(config?: Partial<AppConfig>): AppConfig {
  return {
    action: config?.action || {
      label: i18n.action,
      href: 'https://www.cibulka.codes',
    },
    i18N: config?.i18N || i18n,
    padding: 0,
    colors: config?.colors,
    theme: {
      user: THEME_MODE.DARK,
      selected: THEME_MODE.DARK,
      system: window.matchMedia('prefers-color-scheme: dark').matches
        ? THEME_MODE.DARK
        : THEME_MODE.LIGHT,
      isChanged: false,
    },
  };
}

export function useConfigContext() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error(`useConfigContext: Empty context.`);
  return ctx;
}
