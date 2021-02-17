import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      error: string;
      success: string;
      gray: string;
      lightGray: string;
      extraLightGray: string;
    };
  }
}
