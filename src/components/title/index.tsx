import React from 'react';

import styled from 'styled-components';

import Theme from 'theme';

enum TitleVariant {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
}

type TitleProps = {
  variant: TitleVariant;
  children: React.ReactNode;
  color?: string;
};

type StyledTitleProps = {
  fontSize: string;
  titleColor: string;
};

const StyledTitle = styled.title`
  color: ${({ titleColor }: StyledTitleProps) => titleColor};
  font-weight: bold;
  font-size: ${({ fontSize }: StyledTitleProps) => fontSize};
  line-height: 20px;
`;

const H1 = StyledTitle.withComponent('h1');
const H2 = StyledTitle.withComponent('h2');
const H3 = StyledTitle.withComponent('h3');
const H4 = StyledTitle.withComponent('h4');

const Title = ({ variant, children, color = Theme.colors.primary }: TitleProps): React.ReactElement => {
  if (variant === TitleVariant.H1) {
    return (
      <H1 fontSize='20px' titleColor={color}>
        {children}
      </H1>
    );
  }

  if (variant === TitleVariant.H2) {
    return (
      <H2 fontSize='18px' titleColor={color}>
        {children}
      </H2>
    );
  }

  if (variant === TitleVariant.H3) {
    return (
      <H3 fontSize='16px' titleColor={color}>
        {children}
      </H3>
    );
  }

  return (
    <H4 fontSize='14px' titleColor={color}>
      {children}
    </H4>
  );
};

Title.defaultProps = {
  color: Theme.colors.primary,
};

export default Title;
export { TitleVariant, TitleProps };
