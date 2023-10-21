export interface Colors {
  black: string;
  white: string;
  alphaWhite: string;
  darkAlpha: string;
  grey: string;
  dark: string;
  green: string;
  red: string;
}

export interface FontSizes {
  xSmall: string;
  small: string;
  medium: string;
  xMedium: string;
  large: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
  }
}
