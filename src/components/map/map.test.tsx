import React from 'react';

import { render } from '@testing-library/react';

import Map from '.';

test('Default google map with marker on Lille', () => {
  expect(render(<Map googleApiKey='' markers={[{ lat: 50.62925, lng: 3.057256 }]} />)).toMatchSnapshot();
});
