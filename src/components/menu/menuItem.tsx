import React from 'react';

import styled from 'styled-components';

import Theme from 'theme';

type MenuItemProps = {
  children: string | React.ReactElement | React.ReactNode;
};

const Li = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  &:not(:first-child) {
    border-top: 1px solid ${Theme.colors.lightGray};
  }
`;

const MenuItem = ({ children }: MenuItemProps): React.ReactElement => <Li>{children}</Li>;

export default MenuItem;
export { MenuItemProps };
