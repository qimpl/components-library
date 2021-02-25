import React from 'react';

import { render } from '@testing-library/react';

import Title, { TitleVariant } from 'components/title/title';
import Theme from 'theme/theme';

test('H1 with default color', () => {
  expect(render(<Title variant={TitleVariant.H1}>H1 Title</Title>)).toMatchSnapshot();
});

test('H2 with custom color', () => {
  expect(
    render(
      <Title variant={TitleVariant.H2} color={Theme.colors.gray}>
        H2 Title
      </Title>
    )
  ).toMatchSnapshot();
});

test('H3 with default color', () => {
  expect(render(<Title variant={TitleVariant.H3}>H3 Title</Title>)).toMatchSnapshot();
});

test('H4 with default color', () => {
  expect(render(<Title variant={TitleVariant.H4}>H4 Title</Title>)).toMatchSnapshot();
});
