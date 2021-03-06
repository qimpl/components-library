import React from 'react';

import { render } from '@testing-library/react';

import MenuItem from './menuItem';

test('Default menu', () => {
  expect(
    render(
      <MenuItem>
        <p>Item 1</p>
      </MenuItem>
    )
  ).toMatchSnapshot();
});
