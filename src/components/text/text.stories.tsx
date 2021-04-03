import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextVariant, TextProps } from 'components/text';
import Theme from 'theme';

export default {
  title: 'Qimpl/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(TextVariant),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(Theme.colors),
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

const textValue =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const LargeText = Template.bind({});
LargeText.args = {
  variant: TextVariant.LARGE,
  children: textValue,
  color: Theme.colors.primary,
};

export const MediumText = Template.bind({});
MediumText.args = {
  variant: TextVariant.MEDIUM,
  children: textValue,
  color: Theme.colors.primary,
};

export const SmallTextAndSecondaryColor = Template.bind({});
SmallTextAndSecondaryColor.args = {
  variant: TextVariant.SMALL,
  children: textValue,
  color: Theme.colors.secondary,
};

export const ExtraSmallText = Template.bind({});
ExtraSmallText.args = {
  variant: TextVariant.EXTRA_SMALL,
  children: textValue,
  color: Theme.colors.primary,
};
