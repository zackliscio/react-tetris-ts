import React, { PropsWithChildren, useEffect, useState } from 'react';

import { AppConfig } from './Config.types';
import { getDefaultConfig } from './Config.utils';
import { THEME_MODE } from '@/constants/colors';

export const ConfigContext = React.createContext<
  | (AppConfig & {
      setThemeMode: (
        theme: typeof THEME_MODE.DARK | typeof THEME_MODE.SYSTEM | typeof THEME_MODE.LIGHT,
      ) => void;
    })
  | null
>(null);

export function ConfigContextWrap(props: PropsWithChildren & { config?: Partial<AppConfig> }) {
  const [config, setConfig] = useState({
    ...getDefaultConfig(props.config),
    padding: '1em', // TODO: Remove this
  });

  useEffect(() => {
    function handler(e: MediaQueryListEvent) {
      setConfig((old) => ({
        ...old,
        themeSystem: e.matches ? THEME_MODE.DARK : THEME_MODE.LIGHT,
      }));
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', handler);

    return () => {
      mq.removeEventListener('change', handler);
    };
  }, []);

  function setThemeMode(
    theme: typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT | typeof THEME_MODE.SYSTEM,
  ) {
    setConfig((old) => {
      return {
        ...old,
        theme: {
          ...old.theme,
          selected: theme === THEME_MODE.SYSTEM ? old.theme.system : theme,
          user: theme,
          isChanged: true,
        },
      };
    });
  }

  return (
    <ConfigContext.Provider value={{ ...config, setThemeMode }}>
      {props.children}
    </ConfigContext.Provider>
  );
}
