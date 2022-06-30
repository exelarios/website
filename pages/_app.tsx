import { useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { 
  DARK_THEME,
  GlobalStyles, 
  LIGHT_THEME
} from "../config/theme";

import { ThemeContext, IThemeContext } from "../context/themeContext";

function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setTheme] = useState("dark");

  const value: IThemeContext = useMemo(() => {
    return {
      theme: currentTheme,
      setTheme
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? DARK_THEME : LIGHT_THEME}>
      <ThemeContext.Provider value={value}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp
