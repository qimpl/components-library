import React from 'react';

import { render } from '@testing-library/react';

import Button from 'components/button';
import Theme from 'theme';

test('Primary button with default color', () => {
  expect(render(<Button handleClick={() => 'button click'}>Primary button</Button>)).toMatchSnapshot();
});

test('Outlined button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => 'button click'} isOutlined color={Theme.colors.secondary}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});

test('Disabled button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => 'button click'} isDisabled color={Theme.colors.error}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});

test('Outlined & disabled button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => 'button click'} isOutlined isDisabled color={Theme.colors.error}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});

test('Transparent button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => 'button click'} isTransparent color={Theme.colors.error}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});

test('Small button', () => {
  expect(
    render(
      <Button handleClick={() => 'button click'} isSmall>
        Small button
      </Button>
    )
  ).toMatchSnapshot();
});
