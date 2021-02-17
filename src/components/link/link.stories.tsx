import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import LinkProps from 'components/link/link';
import Link from 'components/link/link.component';

export default {
  title: 'Qimpl/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  href: 'https://google.com',
  title: 'Go to Google',
  children: 'default link',
  target: '_blank',
};
