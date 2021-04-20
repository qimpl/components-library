import React from 'react';

import styled from 'styled-components';

import Theme from 'theme';

type CommonProps = {
  id: string;
  onChange?: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  label?: string | null;
  placeholder?: string | undefined;
  error?: string | null;
};

type TruncatedProps =
  | {
      type: 'button' | 'checkbox' | 'date' | 'email' | 'hidden' | 'password' | 'radio' | 'tel' | 'text' | 'number';
      value?: string;
      accept?: never;
      multiple?: never;
    }
  | {
      type: 'file';
      accept: string;
      value?: never;
      multiple?: boolean;
    };

type InputProps = CommonProps & TruncatedProps;

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
  onChange = undefined,
  onBlur = undefined,
  value = undefined,
  type,
  label = null,
  placeholder = undefined,
  error = null,
  accept,
  multiple = false,
}: InputProps): React.ReactElement => (
  <Container hasError={error !== null}>
    {label !== null && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      accept={accept}
      multiple={multiple}
    />
    {error !== null && <span>{error}</span>}
  </Container>
);

Input.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  label: null,
  placeholder: undefined,
  error: null,
};

export default Input;
export { InputProps };
