import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import CookieBanner from 'components/cookieBanner';

export default {
  title: 'Qimpl/CookieBanner',
  component: CookieBanner,
} as Meta;

export const CookieConsentBanner: Story = (): React.ReactElement => (
  <CookieBanner
    debug
    ariaAcceptLabel='Ok'
    buttonText='Ok'
    message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius quisquam dignissimos vitae ducimus atque, est ipsa vero rem veniam quam. Ea tenetur odio quaerat nulla autem voluptate quo maiores.'
    titleContent='We love cookies'
  />
);
