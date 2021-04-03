import React from 'react';

import styled from 'styled-components';

import Theme from 'theme/theme';

type Option = {
  id: string;
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  defaultOption: Option;
  options: Option[];
  onChange?: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  value?: string;
  label?: string | null;
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

  select {
    max-height: 45px;
    padding: 10px;
    color: ${Theme.colors.primary};
    border: 1px solid ${({ hasError }: ContainerProps) => (hasError ? Theme.colors.error : Theme.colors.lightGray)};
    border-radius: 10px;
    outline: none;
    box-shadow: none;
    cursor: pointer;
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

const Select = ({
  id,
  defaultOption,
  options,
  onChange = undefined,
  onBlur = undefined,
  value = undefined,
  label = null,
  error = null,
}: SelectProps): React.ReactElement => {
  return (
    <Container hasError={error !== null}>
      {label !== null && <label htmlFor={id}>{label}</label>}
      <select id={id} name={id} onChange={onChange} onBlur={onBlur} value={value}>
        <option disabled value={defaultOption.value}>
          {defaultOption.label}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error !== null && <span>{error}</span>}
    </Container>
  );
};

Select.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  value: undefined,
  label: null,
  error: null,
};

export { SelectProps };
export default Select;
