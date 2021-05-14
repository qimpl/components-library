import React from 'react';

import { render } from '@testing-library/react';

import Carousel from '.';

test('Default carousel', () => {
  expect(render(<Carousel pictures={['/house1.jpg', '/house2.jpg']} alt='Carousel test picture' />)).toMatchSnapshot();
});
