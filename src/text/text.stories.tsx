import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Text from 'text/text.component';
import { TextVariant, TextProps } from 'text/text.d';
import { ColorVariant } from 'theme/theme';

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
        options: Object.keys(ColorVariant),
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
  color: ColorVariant.PRIMARY,
};

export const MediumText = Template.bind({});
MediumText.args = {
  variant: TextVariant.MEDIUM,
  children: textValue,
  color: ColorVariant.PRIMARY,
};

export const SmallTextAndSecondaryColor = Template.bind({});
SmallTextAndSecondaryColor.args = {
  variant: TextVariant.SMALL,
  children: textValue,
  color: ColorVariant.SECONDARY,
};

export const ExtraSmallText = Template.bind({});
ExtraSmallText.args = {
  variant: TextVariant.EXTRA_SMALL,
  children: textValue,
  color: ColorVariant.PRIMARY,
};
