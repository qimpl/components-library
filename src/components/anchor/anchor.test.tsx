import React from 'react';

import { render } from '@testing-library/react';

import Anchor from 'components/anchor/anchor';
import Theme from 'theme/theme';

test('Link with default colors', () => {
  expect(
    render(
      <Anchor href='https://google.com' title='Go to Google'>
        Default colors link
      </Anchor>
    )
  ).toMatchSnapshot();
});

test('Link with custom colors', () => {
  expect(
    render(
      <Anchor
        href='https://google.com'
        title='Go to Google'
        anchorStyle={{
          color: Theme.colors.lightGray,
          hoverColor: Theme.colors.gray,
        }}
      >
        Custom colors link
      </Anchor>
    )
  ).toMatchSnapshot();
});

test('Link with blank target', () => {
  expect(
    render(
      <Anchor href='https://google.com' title='Go to Google' target='_blank'>
        Target blank link
      </Anchor>
    )
  ).toMatchSnapshot();
});

test('Link without underline', () => {
  expect(
    render(
      <Anchor title='No underline link title' noUnderline>
        No underline link
      </Anchor>
    )
  ).toMatchSnapshot();
});
