import { useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { 
  lightTheme, 
  darkTheme, 
  GlobalStyles 
} from "../config/theme";

import { ThemeContext, IThemeContext } from '../context/useTheme';

function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = useState("dark");

  const value: IThemeContext = useMemo(() => {
    return {
      mode: currentTheme,
      setTheme: setCurrentTheme,
      theme: currentTheme == "light" ? lightTheme : darkTheme
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={value.theme}>
      <ThemeContext.Provider value={value}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp
