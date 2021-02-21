import React from 'react';

import { lighten, rgba } from 'polished';
import styled from 'styled-components';

import { ButtonProps, StyledButtonProps } from 'components/button/button.d';
import Theme from 'theme/theme';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ transparent }: StyledButtonProps) => (transparent ? '0' : '20px 20px')};
  font-weight: bold;
  background-color: ${({ disabled, outlined, transparent, color }: StyledButtonProps) => {
    if (outlined || transparent) return 'transparent';
    if (disabled) return rgba(color, 0.7);

    return color;
  }};
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: ${({ disabled }: StyledButtonProps) => (disabled ? 'default' : 'pointer')};
  transition: all ease-in-out 0.2s;
  ${({ outlined, transparent, color }: StyledButtonProps) =>
    outlined
      ? `
        border-color: ${color};
        color: ${color};
      `
      : `
        color: ${transparent ? color : 'white'};
  `}
  ${({ transparent, color }: StyledButtonProps) =>
    transparent &&
    `
      &:hover {
        color: ${lighten(0.1, color)};
      }
  `}
  ${({ disabled, outlined, transparent, color }: StyledButtonProps) =>
    !disabled &&
    !transparent &&
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
  isTransparent = false,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton
      onClick={handleClick}
      disabled={isDisabled}
      transparent={isTransparent}
      type='button'
      color={color}
      outlined={isOutlined}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
