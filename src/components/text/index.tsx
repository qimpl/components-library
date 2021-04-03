import React from 'react';

import styled from 'styled-components';

import Theme from 'theme';

enum TextVariant {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  EXTRA_SMALL = 'EXTRA_SMALL',
}

type TextProps = {
  variant: TextVariant;
  children: React.ReactNode;
  color?: string;
};

type StyledTextProps = {
  style: {
    color: string;
    lineHeight: string;
    fontSize: string;
  };
};

const StyledText = styled.p`
  color: ${({ style }: StyledTextProps) => style.color};
  font-size: ${({ style }: StyledTextProps) => style.fontSize};
  line-height: ${({ style }: StyledTextProps) => style.lineHeight};
`;

const Text = ({ variant, children, color = Theme.colors.primary }: TextProps): React.ReactElement => {
  const textStyle = {
    color,
    fontSize: '18px',
    lineHeight: '24px',
  };

  if (variant === TextVariant.MEDIUM) {
    textStyle.fontSize = '15px';
    textStyle.lineHeight = '21px';
  } else if (variant === TextVariant.SMALL) {
    textStyle.fontSize = '14px';
    textStyle.lineHeight = '21px';
  } else if (variant === TextVariant.EXTRA_SMALL) {
    textStyle.fontSize = '13px';
    textStyle.lineHeight = '19px';
  }

  return <StyledText style={textStyle}>{children}</StyledText>;
};

Text.defaultProps = {
  color: Theme.colors.primary,
};

export default Text;
export { TextVariant, TextProps };
