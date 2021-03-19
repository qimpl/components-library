import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleVariant, TitleProps } from 'components/title';
import Theme from 'theme/theme';

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
        options: Object.keys(Theme.colors),
      },
    },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Level1Title = Template.bind({});
Level1Title.args = {
  variant: TitleVariant.H1,
  children: 'Level 1 title',
  color: Theme.colors.primary,
};

export const Level2Title = Template.bind({});
Level2Title.args = {
  variant: TitleVariant.H2,
  children: 'Level 2 title',
  color: Theme.colors.primary,
};

export const Level3TitleAndSecondaryColor = Template.bind({});
Level3TitleAndSecondaryColor.args = {
  variant: TitleVariant.H3,
  children: 'Level 3 title',
  color: Theme.colors.secondary,
};

export const Level4Title = Template.bind({});
Level4Title.args = {
  variant: TitleVariant.H4,
  children: 'Level 4 title',
  color: Theme.colors.primary,
};
