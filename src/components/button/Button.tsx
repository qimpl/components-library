import React from 'react';

import ButtonProps from './button.d';
import './button.css';

const Button = ({ primary, backgroundColor, size, label, onClick }: ButtonProps): React.ReactNode => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

/**
 * Primary UI component for user interaction
 */
export default Button;
