import React from 'react';

import { render } from '@testing-library/react';

import Anchor from 'components/anchor';
import Button from 'components/button';
import Pricing from 'components/pricing';

test('Simple pricing block', () => {
  expect(
    render(
      <Pricing
        title='Business'
        subTitle='Sub title'
        features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6']}
        price={15}
        buttonElement={
          <Anchor title='Subscribe' noUnderline>
            <Button>Subscribe</Button>
          </Anchor>
        }
      />
    )
  ).toMatchSnapshot();
});
