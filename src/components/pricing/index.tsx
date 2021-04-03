import React from 'react';

import { Checkmark24 } from '@carbon/icons-react';
import styled from 'styled-components';

import Theme from '../../theme';
import Text, { TextVariant } from '../text';
import Title, { TitleVariant } from '../title';

type PricingProps = {
  title: string;
  subTitle: string;
  features: string[];
  price: number;
  buttonElement: React.ReactElement;
};

const StyledPricing = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid ${Theme.colors.lightGray};
  border-radius: 25px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 850px) {
    width: auto;
  }

  &:hover {
    border-color: transparent;
    box-shadow: rgba(38, 78, 118, 0.1) 0 4px 25px;
  }

  h3,
  h4 {
    margin: 0;
    text-transform: capitalize;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
  }

  h4 {
    color: ${Theme.colors.darkGray};
    font-weight: normal;
  }

  div {
    margin-top: auto;

    p {
      font-size: 24px !important;
      text-align: center;
    }

    button {
      margin-top: 25px;
    }
  }

  ul {
    margin: 25px 0;
    padding-left: 0;

    li {
      display: flex;
      align-items: center;
      margin: 5px 0;

      span {
        height: 24px;
        margin-right: 5px;
      }

      > p {
        margin: 0;
      }
    }
  }
`;

const Pricing = ({ title, subTitle, features, price, buttonElement }: PricingProps): React.ReactElement => {
  return (
    <StyledPricing>
      <Title variant={TitleVariant.H3}>{title}</Title>
      <Title variant={TitleVariant.H4}>{subTitle}</Title>
      <ul>
        {features.map((feature) => (
          <li key={feature.toLowerCase().replace(/ /g, '-')}>
            <span>
              <Checkmark24 fill={Theme.colors.success} />
            </span>
            <Text variant={TextVariant.MEDIUM} color={Theme.colors.darkGray}>
              {feature}
            </Text>
          </li>
        ))}
      </ul>
      <div>
        <Text variant={TextVariant.LARGE}>{price}€ / Mois*</Text>
        {buttonElement}
      </div>
    </StyledPricing>
  );
};

export default Pricing;
export { PricingProps };
