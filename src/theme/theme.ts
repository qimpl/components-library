import { rgb } from 'polished';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      error: string;
      success: string;
      darkGray: string;
      gray: string;
      lightGray: string;
      extraLightGray: string;
    };
  }
}

const Theme: DefaultTheme = {
  colors: {
    primary: rgb(1, 60, 99),
    secondary: rgb(1, 137, 229),
    error: rgb(255, 61, 61),
    success: rgb(55, 138, 66),
    darkGray: rgb(67, 80, 88),
    gray: rgb(54, 64, 70),
    lightGray: rgb(36, 38, 29),
    extraLightGray: rgb(72, 73, 71),
  },
};

export default Theme;
