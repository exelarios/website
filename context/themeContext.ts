import { createContext, useContext } from "react";

export interface IThemeContext {
  theme?: string;
  setTheme(mode: string): void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContext.Provider');
  }

  return context;
}