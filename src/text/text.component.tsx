import React from 'react';

import styled from 'styled-components';

import { TextVariant, TextProps, StyledTextProps } from 'text/text.d';
import { Theme, ColorVariant, getColorString } from 'theme/theme';

const StyledText = styled.p`
  color: ${(props: StyledTextProps) => props.style.color};
  font-size: ${(props: StyledTextProps) => props.style.fontSize};
  line-height: ${(props: StyledTextProps) => props.style.lineHeight};
`;

const Text = ({ variant, children, color = ColorVariant.PRIMARY }: TextProps): React.ReactElement => {
  let textStyle = {
    color: Theme.colors.primary,
    fontSize: '18px',
    lineHeight: '24px',
  };

  const givenColor: string = getColorString(color);

  switch (variant) {
    case TextVariant.MEDIUM:
      textStyle = {
        color: givenColor,
        fontSize: '15px',
        lineHeight: '21px',
      };

      break;
    case TextVariant.SMALL:
      textStyle = {
        color: givenColor,
        fontSize: '14px',
        lineHeight: '21px',
      };

      break;
    case TextVariant.EXTRA_SMALL:
      textStyle = {
        color: givenColor,
        fontSize: '13px',
        lineHeight: '19px',
      };

      break;
    default:
      break;
  }

  return <StyledText style={textStyle}>{children}</StyledText>;
};

export default Text;
