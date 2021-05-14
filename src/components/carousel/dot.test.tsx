import React from 'react';

import { render } from '@testing-library/react';

import Dot from './dot';

test('Default selected dot', () => {
  expect(render(<Dot isSelected handleClick={() => 'dot click'} />)).toMatchSnapshot();
});

test('Default unselected dot', () => {
  expect(render(<Dot isSelected handleClick={() => 'dot click'} />)).toMatchSnapshot();
});

test('Default colorized dot', () => {
  expect(
    render(
      <Dot
        isSelected
        handleClick={() => 'dot click'}
        dotBorderColor='grey'
        dotHoverColor='grey'
        dotSelectedColor='grey'
      />
    )
  ).toMatchSnapshot();
});
