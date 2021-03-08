import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '.';
import MenuItem from './menuItem';

export default {
  title: 'Qimpl/Menu',
  component: Menu,
} as Meta;

const items = (
  <>
    <MenuItem>
      <p>Item 1</p>
    </MenuItem>
    <MenuItem>
      <p>Item 2</p>
    </MenuItem>
    <MenuItem>
      <p>Item 3</p>
    </MenuItem>
    <MenuItem>
      <p>Item 4</p>
    </MenuItem>
  </>
);

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const defaultMenu = Template.bind({});
defaultMenu.args = {
  toggleButtonContent: 'Open',
  children: items,
};

export const dropdownMenu = Template.bind({});
dropdownMenu.args = {
  toggleButtonContent: 'Open',
  children: items,
  isDropdown: true,
};
