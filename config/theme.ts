import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string,
    color: string,
    hue: any
  } 
}

export const LIGHT_THEME: DefaultTheme = {
  background: "white",
  color: "black",
  hue: {
    link: "black",
    visited: "#727272"
  }
}

export const DARK_THEME: DefaultTheme = {
  background: "black",
  color: "white",
  hue: {
    link: "white",
    visited: "#d5d5d5"
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: "Source Code Pro", "Courier New", monospace;
    max-width: 1920px;
    margin: auto;
    padding: 0;

    * {
      box-sizing: border-box;
    }

    a:link {
      color: ${p => p.theme.hue.link}
    }

    a:visited {
      color: ${p => p.theme.hue.visited}
    }
  }
`