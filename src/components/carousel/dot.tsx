import React from 'react';

import styled from 'styled-components';

type DotProps = {
  isSelected: boolean;
  handleClick: React.MouseEventHandler | React.ReactEventHandler | undefined;
  dotBorderColor?: string;
  dotHoverColor?: string;
  dotSelectedColor?: string;
};

type StyledDotProps = {
  style: {
    backgroundColor: string;
    dotBorderColor: string;
    dotHoverColor: string;
  };
};

const DotContainer = styled.button`
  width: 12px;
  height: 12px;
  margin: 0 2px;
  background-color: ${({ style }: StyledDotProps) => style.backgroundColor};
  border: 1px solid ${({ style }: StyledDotProps) => style.dotBorderColor};
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ style }: StyledDotProps) => `${style.dotHoverColor} !important`};
    cursor: pointer;
  }
`;

const Dot = ({
  isSelected = false,
  handleClick,
  dotBorderColor = 'white',
  dotHoverColor = 'white',
  dotSelectedColor = 'white',
}: DotProps): React.ReactElement => (
  <DotContainer
    style={{ backgroundColor: isSelected ? dotSelectedColor : 'transparent', dotBorderColor, dotHoverColor }}
    onClick={handleClick}
  />
);

Dot.defaultProps = {
  dotBorderColor: 'white',
  dotHoverColor: 'white',
  dotSelectedColor: 'white',
};

export default Dot;
export { DotProps };
