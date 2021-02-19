import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Link from 'components/link/link';
import { LinkProps } from 'components/link/link.d';
import Theme from 'theme/theme';

export default {
  title: 'Qimpl/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <div style={{ width: 'max-content' }}>
    <Link {...args} />
  </div>
);

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  href: 'https://google.com',
  title: 'Go to Google',
  children: 'default link',
  target: '_blank',
};

export const CustomColorsLink = Template.bind({});
CustomColorsLink.args = {
  href: 'https://google.com',
  title: 'Go to Google',
  children: 'custom colors link',
  linkStyle: {
    color: Theme.colors.lightGray,
    hoverColor: Theme.colors.gray,
  },
};
