import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Link from 'link/link.component';
import LinkProps from 'link/link.d';

export default {
  title: 'Qimpl/Link',
  component: Link,
  argTypes: {
    // variant: {
    //   control: {
    //     type: 'select',
    //     options: Object.keys(LinkVariant),
    //   },
    // },
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  href: 'https://google.com',
  title: 'Go to Google',
  children: 'default link',
  target: '_blank',
};
