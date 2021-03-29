import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Text, { TextVariant } from 'components/text';
import Title, { TitleVariant } from 'components/title';

import Card, { CardProps } from '.';

export default {
  title: 'Qimpl/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const defaultCard = Template.bind({});
defaultCard.args = {
  children: (
    <CardContent>
      <Title variant={TitleVariant.H1}>Custom List Item</Title>
      <Text variant={TextVariant.MEDIUM}>List Item 1</Text>
      <Text variant={TextVariant.MEDIUM}>List Item 2</Text>
      <Text variant={TextVariant.MEDIUM}>List Item 3</Text>
    </CardContent>
  ),
};
