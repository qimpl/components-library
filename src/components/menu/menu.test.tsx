import React from 'react';

import { render } from '@testing-library/react';

import Menu from '.';
import MenuItem from './menuItem';

test('Default menu', () => {
  expect(
    render(
      <Menu toggleButtonContent='open menu'>
        <>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>
            <p>Item 2</p>
          </MenuItem>
        </>
      </Menu>
    )
  ).toMatchSnapshot();
});

test('Dropdown menu', () => {
  expect(
    render(
      <Menu toggleButtonContent='open menu' isDropdown>
        <>
          <MenuItem>
            <p>Item 1</p>
          </MenuItem>
          <MenuItem>
            <p>Item 2</p>
          </MenuItem>
        </>
      </Menu>
    )
  ).toMatchSnapshot();
});
