import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Anchor, { AnchorProps } from 'components/anchor';
import Theme from 'theme';

export default {
  title: 'Qimpl/Anchor',
  component: Anchor,
} as Meta;

const Template: Story<AnchorProps> = (args) => (
  <div style={{ width: 'max-content' }}>
    <Anchor {...args} />
  </div>
);

export const DefaultAnchor = Template.bind({});
DefaultAnchor.args = {
  href: 'https://google.com',
  title: 'Go to Google',
  children: 'default link',
  target: '_blank',
};

export const CustomColorsAnchor = Template.bind({});
CustomColorsAnchor.args = {
  href: 'https://google.com',
  title: 'Go to Google',
  children: 'custom colors link',
  anchorStyle: {
    color: Theme.colors.lightGray,
    hoverColor: Theme.colors.gray,
  },
};

export const NoUnderlineAnchor = Template.bind({});
NoUnderlineAnchor.args = {
  title: 'Go to Google',
  children: 'no underline link',
  noUnderline: true,
};
