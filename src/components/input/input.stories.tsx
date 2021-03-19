import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from 'components/input';

export default {
  title: 'Qimpl/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  id: 'username',
  label: 'Username',
  type: 'text',
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  id: 'email',
  label: 'Email',
  type: 'email',
  value: 'test.foo.com',
  error: 'Invalid Email',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: 'password',
  label: 'Password',
  type: 'password',
};

export const NoLabelInput = Template.bind({});
PasswordInput.args = {
  id: 'nolabel',
};
