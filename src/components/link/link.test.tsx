import React from 'react';

import { render } from '@testing-library/react';

import Link from 'components/link/link';
import Theme from 'theme/theme';

test('Link with default colors', () => {
  expect(
    render(
      <Link href='https://google.com' title='Go to Google'>
        Default colors link
      </Link>
    )
  ).toMatchSnapshot();
});

test('Link with custom colors', () => {
  expect(
    render(
      <Link
        href='https://google.com'
        title='Go to Google'
        linkStyle={{
          color: Theme.colors.lightGray,
          hoverColor: Theme.colors.gray,
        }}
      >
        Custom colors link
      </Link>
    )
  ).toMatchSnapshot();
});

test('Link with blank target', () => {
  expect(
    render(
      <Link href='https://google.com' title='Go to Google' target='_blank'>
        Target blank link
      </Link>
    )
  ).toMatchSnapshot();
});
