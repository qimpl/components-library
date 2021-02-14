import React from 'react';

import styled from 'styled-components';

import { TextVariant, TextProps, StyledTextProps } from 'text/text.d';
import { Colors, ColorVariant } from 'theme/colors';

const StyledText = styled.p`
  ${(props: StyledTextProps) => props.textColor};
  font-size: ${(props: StyledTextProps) => props.fontSize};
  line-height: ${(props: StyledTextProps) => props.lineHeight};
`;

const Text = ({ variant, children, color = ColorVariant.PRIMARY }: TextProps): React.ReactElement => {
  let textColor;
  if (color === ColorVariant.SECONDARY) textColor = Colors.Secondary;
  else textColor = Colors.Primary;

  switch (variant) {
    case TextVariant.MEDIUM:
      return (
        <StyledText fontSize='15px' lineHeight='21px' textColor={textColor}>
          {children}
        </StyledText>
      );

    case TextVariant.SMALL:
      return (
        <StyledText fontSize='14px' lineHeight='21px' textColor={textColor}>
          {children}
        </StyledText>
      );

    case TextVariant.EXTRA_SMALL:
      return (
        <StyledText fontSize='13px' lineHeight='19px' textColor={textColor}>
          {children}
        </StyledText>
      );

    default:
      return (
        <StyledText fontSize='18px' lineHeight='24px' textColor={textColor}>
          {children}
        </StyledText>
      );
  }
};

export default Text;
