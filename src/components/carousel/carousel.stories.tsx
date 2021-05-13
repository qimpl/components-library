import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Carousel, { CarouselProps } from '.';

export default {
  title: 'Qimpl/Carousel',
  component: Carousel,
} as Meta;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Template: Story<CarouselProps> = (args) => (
  <CarouselContainer>
    <Carousel {...args} />
  </CarouselContainer>
);

const pictures = ['/house1.jpg', '/house2.jpg'];

export const defaultCarousel = Template.bind({});
defaultCarousel.args = {
  pictures,
  alt: 'Default storybook carousel picture',
};
