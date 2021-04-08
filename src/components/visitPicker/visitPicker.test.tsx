import React from 'react';

import { render } from '@testing-library/react';

import VisitPicker from 'components/visitPicker';

const userAvailabilities = [
  { weekday: 0, startTime: '09:00', endTime: '11:00' },
  { weekday: 0, startTime: '14:00', endTime: '18:00' },
  { weekday: 1, startTime: '09:00', endTime: '11:00' },
  { weekday: 4, startTime: '02:00', endTime: '05:00' },
];

const userBookedVisits = [
  { hour: '10:00', date: '2021-04-11' },
  { hour: '14:00', date: '2021-04-11' },
];

test('Visit Picker test', () => {
  expect(
    render(
      <VisitPicker
        userAvailabilities={userAvailabilities}
        userBookedVisits={userBookedVisits}
        noAvailabilityMsg='No slot available for this date'
        handleClickVisitSlot={() => 'button click'}
      />
    )
  ).toMatchSnapshot();
});
