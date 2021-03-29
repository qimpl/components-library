import React from 'react';

import { render } from '@testing-library/react';

import Select from 'components/select';

const defaultOption = {
  id: 'disabled-option',
  value: '',
  label: 'Select',
};

const options = [
  {
    id: '1',
    value: '1',
    label: '1st value',
  },
  {
    id: '2',
    value: '2',
    label: '2nd value',
  },
  {
    id: '3',
    value: '3',
    label: '3rd value',
  },
];

test('Default select', () => {
  expect(
    render(
      <Select
        id='my-select'
        label='Choose'
        onChange={() => 'changed'}
        onBlur={() => 'blurred'}
        value=''
        defaultOption={defaultOption}
        options={options}
      />
    )
  ).toMatchSnapshot();
});

test('Pre-selected value', () => {
  expect(
    render(
      <Select
        id='my-select'
        label='Choose'
        onChange={() => 'changed'}
        onBlur={() => 'blurred'}
        value='2'
        defaultOption={defaultOption}
        options={options}
      />
    )
  ).toMatchSnapshot();
});

test('Select with errror', () => {
  expect(
    render(
      <Select
        id='error-select'
        label='Choose'
        onChange={() => 'changed'}
        onBlur={() => 'blurred'}
        value=''
        error='Select a value'
        defaultOption={defaultOption}
        options={options}
      />
    )
  ).toMatchSnapshot();
});

test('Select without label', () => {
  expect(
    render(
      <Select
        id='select-no-label'
        onChange={() => 'changed'}
        onBlur={() => 'blurred'}
        value=''
        defaultOption={defaultOption}
        options={options}
      />
    )
  ).toMatchSnapshot();
});
