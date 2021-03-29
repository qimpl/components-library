import React from 'react';

import { render } from '@testing-library/react';

import Text, { TextVariant } from 'components/text';
import Title, { TitleVariant } from 'components/title';

import Card from '.';

test('Default card', () => {
  expect(
    render(
      <Card>
        <>
          <Title variant={TitleVariant.H1}>Custom List Item</Title>
          <Text variant={TextVariant.MEDIUM}>List Item 1</Text>
          <Text variant={TextVariant.MEDIUM}>List Item 2</Text>
          <Text variant={TextVariant.MEDIUM}>List Item 3</Text>
        </>
      </Card>
    )
  ).toMatchSnapshot();
});
