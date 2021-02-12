import { ColorsProps, ColorVariant } from 'theme/colors';

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
  textColor: ColorsProps;
};

export { TextVariant, TextProps, StyledTextProps };
