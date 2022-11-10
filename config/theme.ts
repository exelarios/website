import { createGlobalStyle, DefaultTheme } from "styled-components";

import LEDFont from "../assets/styles/font.module.css";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string,
    color: string,
    anchor: any
  } 
}

export const LIGHT_THEME: DefaultTheme = {
  background: "white",
  color: "black",
  anchor: {
    color: "white",
    background: "black"
  }
}

export const DARK_THEME: DefaultTheme = {
  background: "black",
  color: "white",
  anchor: {
    color: "black",
    background: "white"
  }
}

export const GlobalStyles = createGlobalStyle`

  ${LEDFont}

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: "Source Code Pro", "Courier New", monospace;
    transition: all 1s;
    max-width: 1920px;
    margin: auto;
    padding: 0;

    * {
      box-sizing: border-box;
    }

    a:link {
      color: ${p => p.theme.color}
    }
    a:visited {
      color: ${p => p.theme.color}
    }
  }
`