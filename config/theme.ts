import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string,
    color: string
  } 
}

export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  color: "#00000"
}

export const darkTheme: DefaultTheme = {
  background: "black",
  color: "#ffffff"
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: "Source Code Pro", "Courier New", monospace;
    max-width: 1920px;
    margin: 0;
    padding: 0;
    transition: all 1s;

    * {
      box-sizing: border-box;
    }
  }
`