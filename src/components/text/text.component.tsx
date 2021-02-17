import React from 'react';

import styled from 'styled-components';

import { TextVariant, TextProps, StyledTextProps } from 'components/text/text.d';
import Theme from 'theme/theme';

const StyledText = styled.p`
  color: ${(props: StyledTextProps) => props.style.color};
  font-size: ${(props: StyledTextProps) => props.style.fontSize};
  line-height: ${(props: StyledTextProps) => props.style.lineHeight};
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

export default Text;
