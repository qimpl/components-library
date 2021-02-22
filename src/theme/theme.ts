import { rgba } from 'polished';
import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: rgba(1, 60, 99, 1),
    secondary: rgba(1, 137, 229, 1),
    error: rgba(255, 61, 61, 1),
    success: rgba(55, 138, 66, 1),
    gray: rgba(67, 80, 88, 1),
    lightGray: rgba(67, 80, 88, 0.8),
    extraLightGray: rgba(241, 242, 238, 0.3),
  },
};

export default Theme;
