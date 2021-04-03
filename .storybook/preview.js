import React from 'react';
import styled from 'styled-components';

import Theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const GlobalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');

  font-family: ${Theme.fontFamily};
`;

export const decorators = [
  (Story) => (
    <GlobalContainer>
      <Story />
    </GlobalContainer>
  ),
];
