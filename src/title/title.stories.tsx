import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ColorVariant } from 'theme/theme';
import Title from 'title/title.component';
import { TitleVariant, TitleProps } from 'title/title.d';

export default {
  title: 'Qimpl/Title',
  component: Title,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(TitleVariant),
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

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Level1Title = Template.bind({});
Level1Title.args = {
  variant: TitleVariant.H1,
  children: 'Level 1 title',
  color: ColorVariant.PRIMARY,
};

export const Level2Title = Template.bind({});
Level2Title.args = {
  variant: TitleVariant.H2,
  children: 'Level 2 title',
  color: ColorVariant.PRIMARY,
};

export const Level3TitleAndSecondaryColor = Template.bind({});
Level3TitleAndSecondaryColor.args = {
  variant: TitleVariant.H3,
  children: 'Level 3 title',
  color: ColorVariant.SECONDARY,
};

export const Level4Title = Template.bind({});
Level4Title.args = {
  variant: TitleVariant.H4,
  children: 'Level 4 title',
  color: ColorVariant.PRIMARY,
};
