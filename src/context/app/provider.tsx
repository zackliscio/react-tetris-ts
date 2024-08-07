import React, { PropsWithChildren, useReducer } from "react";

import { ThemeMode } from "@/shared/constants/theme";
import { CssVars } from "./css-vars";
import { appReducer } from "./reducer";
import { AppContextValue, AppDispatch } from "./types";
import { useSystemLightMode } from "./use-system-light-mode";

const initialState: AppContextValue = {
  initialLevel: 3,
  initialRows: 5,
  themeSystem: undefined,
  themeUser: ThemeMode.DARK,
};

export const AppContext = React.createContext<{
  state: AppContextValue;
  dispatch: AppDispatch | null;
}>({ state: initialState, dispatch: null });

export function AppProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useSystemLightMode({ dispatch });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CssVars />
      {props.children}
    </AppContext.Provider>
  );
}
