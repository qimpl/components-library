import React from 'react';

import styled from 'styled-components';

import { Colors, ColorVariant } from 'theme/colors';
import { TitleVariant, TitleProps, StyledTitleProps } from 'title/title.d';

const StyledTitle = styled.title`
  ${(props: StyledTitleProps) => props.titleColor};
  font-size: ${(props: StyledTitleProps) => props.fontSize};
  font-weight: bold;
  line-height: 20px;
`;

const H1 = StyledTitle.withComponent('h1');
const H2 = StyledTitle.withComponent('h2');
const H3 = StyledTitle.withComponent('h3');
const H4 = StyledTitle.withComponent('h4');

const Title = ({ variant, children, color = ColorVariant.PRIMARY }: TitleProps): React.ReactElement => {
  let titleColor;
  if (color === ColorVariant.SECONDARY) titleColor = Colors.Secondary;
  else titleColor = Colors.Primary;

  switch (variant) {
    case TitleVariant.H2:
      return (
        <H2 fontSize='18px' titleColor={titleColor}>
          {children}
        </H2>
      );

    case TitleVariant.H3:
      return (
        <H3 fontSize='16px' titleColor={titleColor}>
          {children}
        </H3>
      );

    case TitleVariant.H4:
      return (
        <H4 fontSize='14px' titleColor={titleColor}>
          {children}
        </H4>
      );

    default:
      return (
        <H1 fontSize='20px' titleColor={titleColor}>
          {children}
        </H1>
      );
  }
};

export default Title;
