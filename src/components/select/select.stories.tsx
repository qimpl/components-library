import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps } from 'components/select';

export default {
  title: 'Qimpl/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
  },
} as Meta;

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

const Template: Story<SelectProps> = (args: SelectProps) => <Select {...args} />;

export const defaultSelect = Template.bind({});
defaultSelect.args = {
  id: 'my-select',
  value: '',
  defaultOption,
  options,
};

export const preSelectedValue = Template.bind({});
preSelectedValue.args = {
  id: 'my-select',
  value: '2',
  label: 'Choose',
  defaultOption,
  options,
};

export const errorSelect = Template.bind({});
errorSelect.args = {
  id: 'my-select',
  value: '',
  label: 'Choose',
  error: 'Select a value',
  defaultOption,
  options,
};
