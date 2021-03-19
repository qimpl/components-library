import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from 'components/button';
import Theme from 'theme/theme';

export default {
  title: 'Qimpl/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Button',
  color: Theme.colors.primary,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Button',
  color: Theme.colors.secondary,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Button',
  color: Theme.colors.success,
  isOutlined: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Button',
  color: Theme.colors.primary,
  isDisabled: true,
};

export const TransparentButton = Template.bind({});
TransparentButton.args = {
  children: 'Button',
  color: Theme.colors.success,
  isTransparent: true,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Button',
  isSmall: true,
};
