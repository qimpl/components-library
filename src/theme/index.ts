import { rgb, rgba } from 'polished';
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
    fontFamily: string;
  }
}

const Theme: DefaultTheme = {
  colors: {
    primary: rgb(1, 60, 99),
    secondary: rgb(1, 137, 229),
    error: rgb(255, 61, 61),
    success: rgb(55, 138, 66),
    darkGray: rgb(67, 80, 88),
    gray: rgba(67, 80, 88, 0.8),
    lightGray: rgba(120, 127, 98, 0.3),
    extraLightGray: rgba(241, 242, 238, 0.3),
  },
  fontFamily: 'Source Sans Pro',
};

export default Theme;
