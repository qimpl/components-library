import React from 'react';

import { lighten } from 'polished';
import styled from 'styled-components';

import { ButtonProps, StyledButtonProps } from 'components/button/button.d';
import Theme from 'theme/theme';

const StyledButton = styled.button`
  width: 100%;
  height: 54px;
  border-radius: 50px;
  font-weight: bold;
  padding: 0 20px;
  cursor: ${({ disabled }: StyledButtonProps) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.2s;
  border: 1px solid;
  background-color: ${({ outlined, color }: StyledButtonProps) => (outlined ? 'transparent' : color)};

  ${({ outlined, color }: StyledButtonProps) =>
    outlined
      ? `
        border-color: ${color};
        color: ${color};
      `
      : `
        color: white;
  `}

  ${({ disabled, outlined, color }: StyledButtonProps) =>
    !disabled &&
    `
      &:hover {
        background-color: ${outlined ? color : lighten(0.1, color)};
        color: white;
      }
  `};
`;

const Button = ({
  children,
  handleClick,
  isDisabled = false,
  color = Theme.colors.primary,
  isOutlined = false,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton onClick={handleClick} disabled={isDisabled} type='button' color={color} outlined={isOutlined}>
      {children}
    </StyledButton>
  );
};

export default Button;
