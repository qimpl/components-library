import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Anchor from 'components/anchor';
import Button from 'components/button';
import Pricing from 'components/pricing';

export default {
  title: 'Qimpl/Pricing',
  component: Pricing,
} as Meta;

const PricingContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 250px);
  justify-content: center;
`;

export const DefaultPricing: Story = (): React.ReactElement => (
  <PricingContainer>
    <Pricing
      title='Basic'
      subTitle='Sub title'
      features={['Feature 1', 'Feature 2']}
      price={5}
      buttonElement={
        <Anchor title='Subscribe' noUnderline>
          <Button>Subscribe</Button>
        </Anchor>
      }
    />
    <Pricing
      title='Premium'
      subTitle='Sub title'
      features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}
      price={10}
      buttonElement={
        <Anchor title='Subscribe' noUnderline>
          <Button>Subscribe</Button>
        </Anchor>
      }
    />
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
  </PricingContainer>
);
