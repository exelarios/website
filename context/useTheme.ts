import { createContext, useContext } from "react";

export interface IThemeContext {
  mode: string;
  setTheme(mode: string): void;
  theme: object;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalsContext.Provider');
  }

  return context;
}