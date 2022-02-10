import { createContext, useContext } from "react";
import { DefaultTheme, ThemeProps } from "styled-components";

export interface IThemeContext {
  mode?: string;
  setTheme(mode: string): void;
  theme?: any;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContext.Provider');
  }

  return context;
}