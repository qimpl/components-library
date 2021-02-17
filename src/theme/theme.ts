import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: 'rgba(1, 60, 99, 1)',
    secondary: 'rgba(1, 60, 99, 0.7)',
    error: 'rgba(255, 61, 61, 1)',
    success: 'rgba(55, 138, 66, 1)',
  },
};

enum ColorVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

const getColorString = (givenColor: ColorVariant): string => {
  if (givenColor === ColorVariant.SECONDARY) return Theme.colors.secondary;
  if (givenColor === ColorVariant.SUCCESS) return Theme.colors.success;
  if (givenColor === ColorVariant.ERROR) return Theme.colors.error;

  return Theme.colors.primary;
};

export { Theme, ColorVariant, getColorString };
