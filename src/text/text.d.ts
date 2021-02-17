import { ColorVariant } from 'theme/theme';

enum TextVariant {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  EXTRA_SMALL = 'EXTRA_SMALL',
}

type TextProps = {
  variant: TextVariant;
  children: React.ReactNode;
  color?: ColorVariant;
};

type StyledTextProps = {
  fontSize: string;
  lineHeight: string;
  textColor: string;
};

export { TextVariant, TextProps, StyledTextProps };
