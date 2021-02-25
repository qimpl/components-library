import React from 'react';

import { lighten, rgba } from 'polished';
import styled from 'styled-components';

import Theme from 'theme/theme';

type ButtonProps = {
  children: React.ReactNode | React.ReactElement | string;
  handleClick: React.MouseEventHandler | React.ReactEventHandler;
  color?: string;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isTransparent?: boolean;
};

type StyledButtonProps = {
  color: string;
  outlined: boolean;
  disabled: boolean;
  transparent: boolean;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ transparent }: StyledButtonProps) => (transparent ? '0' : '20px 20px')};
  color: ${({ color, outlined, transparent }: StyledButtonProps) => (transparent || outlined ? color : 'white')};
  font-weight: bold;
  background-color: ${({ disabled, outlined, transparent, color }: StyledButtonProps): string => {
    if (outlined || transparent) return 'transparent';
    if (disabled) return rgba(color, 0.7);

    return color;
  }};
  border: ${({ outlined, color }: StyledButtonProps) => `1px solid ${outlined ? color : 'transparent'}`};
  border-radius: 50px;
  cursor: ${({ disabled }: StyledButtonProps) => (disabled ? 'default' : 'pointer')};
  transition: all ease-in-out 0.2s;

  &:hover {
    color: ${({ color, transparent }: StyledButtonProps): string => {
      if (transparent) return lighten(0.1, color);

      return 'white';
    }};
    background-color: ${({ color, disabled, outlined, transparent }: StyledButtonProps): string => {
      if (disabled || transparent) return '';
      if (outlined) return color;

      return lighten(0.1, color);
    }};
  }
`;

const Button = ({
  children,
  handleClick,
  color = Theme.colors.primary,
  isDisabled = false,
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

Button.defaultProps = {
  color: Theme.colors.primary,
  isDisabled: false,
  isOutlined: false,
  isTransparent: false,
};

export default Button;
export { ButtonProps };
