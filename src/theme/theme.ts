import { rgba } from 'polished';
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
    primary: rgba(1, 60, 99, 1),
    secondary: rgba(1, 137, 229, 1),
    error: rgba(255, 61, 61, 1),
    success: rgba(55, 138, 66, 1),
    darkGray: rgba(67, 80, 88, 1),
    gray: rgba(67, 80, 88, 0.8),
    lightGray: rgba(120, 127, 98, 0.3),
    extraLightGray: rgba(241, 242, 238, 0.3),
  },
};

export default Theme;
