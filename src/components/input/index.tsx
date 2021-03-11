import React from 'react';

import styled from 'styled-components';

import Theme from 'theme/theme';

type InputProps = {
  id: string;
  label: string;
  type: string;
  onChange: React.ChangeEventHandler;
  onBlur: React.FocusEventHandler;
  value: string;
  error?: string | null;
};

type ContainerProps = {
  hasError: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    color: ${Theme.colors.primary};
  }

  input {
    max-height: 45px;
    padding: 10px;
    color: ${Theme.colors.primary};
    border: 1px solid ${({ hasError }: ContainerProps) => (hasError ? Theme.colors.error : Theme.colors.lightGray)};
    border-radius: 10px;
    outline: none;
    box-shadow: none;
    transition: border-color 0.15s ease-in-out;

    &:focus {
      border-color: ${Theme.colors.primary};
    }
  }

  span {
    margin-top: 7px;
    color: ${Theme.colors.error};
    font-size: 13px;
  }
`;

const Input = ({ id, label, type, onChange, onBlur, value, error = null }: InputProps): React.ReactElement => (
  <Container hasError={error !== null}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} onChange={onChange} onBlur={onBlur} value={value} />
    {error !== null && <span>{error}</span>}
  </Container>
);

Input.defaultProps = {
  error: null,
};

export default Input;
export { InputProps };
