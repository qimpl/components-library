import React from 'react';

import { render } from '@testing-library/react';

import CookieBanner from 'components/cookieBanner';

test('Simple Cookie Banner', () => {
  expect(
    render(
      <CookieBanner
        ariaAcceptLabel='Ok'
        buttonText='Ok'
        message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius quisquam dignissimos vitae ducimus atque, est ipsa vero rem veniam quam. Ea tenetur odio quaerat nulla autem voluptate quo maiores.'
        titleContent='We love cookies'
      />
    )
  ).toMatchSnapshot();
});

test('Cookie Banner with element title', () => {
  expect(
    render(
      <CookieBanner
        ariaAcceptLabel='Ok'
        buttonText='Ok'
        message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius quisquam dignissimos vitae ducimus atque, est ipsa vero rem veniam quam. Ea tenetur odio quaerat nulla autem voluptate quo maiores.'
        titleContent={
          <>
            We love cookies{' '}
            <span role='img' aria-label='cookie'>
              🍪
            </span>
          </>
        }
      />
    )
  ).toMatchSnapshot();
});
