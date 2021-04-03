import React from 'react';

import { render } from '@testing-library/react';

import Text, { TextVariant } from 'components/text';
import Theme from 'theme';

test('Large text with default color', () => {
  expect(render(<Text variant={TextVariant.LARGE}>Large text</Text>)).toMatchSnapshot();
});

test('Medium text with custom color', () => {
  expect(
    render(
      <Text variant={TextVariant.MEDIUM} color={Theme.colors.gray}>
        Medium text
      </Text>
    )
  ).toMatchSnapshot();
});

test('Small with default color', () => {
  expect(render(<Text variant={TextVariant.SMALL}>Small text</Text>)).toMatchSnapshot();
});

test('Extra small with default color', () => {
  expect(render(<Text variant={TextVariant.EXTRA_SMALL}>Extra small text</Text>)).toMatchSnapshot();
});
