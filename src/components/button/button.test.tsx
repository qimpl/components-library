import React from 'react';

import { render } from '@testing-library/react';

import Button from 'components/button/button';
import Theme from 'theme/theme';

test('Primary button with default color', () => {
  expect(render(<Button handleClick={() => console.log('button click')}>Primary button</Button>)).toMatchSnapshot();
});

test('Outlined button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => console.log('button click')} isOutlined color={Theme.colors.secondary}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});

test('Disabled button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => console.log('button click')} isDisabled color={Theme.colors.error}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});

test('Outlined & disabled button with custom color', () => {
  expect(
    render(
      <Button handleClick={() => console.log('button click')} isOutlined isDisabled color={Theme.colors.error}>
        Primary button
      </Button>
    )
  ).toMatchSnapshot();
});
