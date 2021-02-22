import React from 'react';

type StyledButtonProps = {
  color: string;
  outlined: boolean;
  disabled: boolean;
  transparent: boolean;
};

type ButtonProps = {
  children: React.ReactNode | React.ReactElement | string;
  handleClick: React.MouseEventHandler | React.ReactEventHandler;
  color?: string;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isTransparent?: boolean;
};

export { ButtonProps, StyledButtonProps };
