import React from 'react';

import styled from 'styled-components';

import Theme from 'theme/theme';

type InputProps = {
  id: string;
  onChange: React.ChangeEventHandler;
  onBlur: React.FocusEventHandler;
  value: string;
  type?: string;
  label?: string | null;
  placeholder?: string | undefined;
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

    &::placeholder {
      color: ${Theme.colors.gray};
    }
  }

  span {
    margin-top: 7px;
    color: ${Theme.colors.error};
    font-size: 13px;
  }
`;

const Input = ({
  id,
  onChange,
  onBlur,
  value,
  type = 'text',
  label = null,
  placeholder = undefined,
  error = null,
}: InputProps): React.ReactElement => (
  <Container hasError={error !== null}>
    {label !== null && <label htmlFor={id}>{label}</label>}
    <input id={id} type={type} onChange={onChange} onBlur={onBlur} value={value} placeholder={placeholder} />
    {error !== null && <span>{error}</span>}
  </Container>
);

Input.defaultProps = {
  type: 'text',
  label: null,
  placeholder: undefined,
  error: null,
};

export default Input;
export { InputProps };
