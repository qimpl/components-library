import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import VisitPicker, { VisitPickerProps } from '.';

export default {
  title: 'Qimpl/VisitPicker',
  component: VisitPicker,
  argTypes: {
    handleClickVisitSlot: { action: 'clicked' },
  },
} as Meta;

const Template: Story<VisitPickerProps> = (args) => <VisitPicker {...args} />;

const userAvailabilities = [
  { weekday: 0, startTime: '09:00', endTime: '11:00' },
  { weekday: 0, startTime: '14:00', endTime: '18:00' },
  { weekday: 1, startTime: '09:00', endTime: '11:00' },
  { weekday: 4, startTime: '02:00', endTime: '05:00' },
];

const userBookedVisits = [
  { hour: '10:00', date: new Date('2021-04-11') },
  { hour: '14:00', date: new Date('2021-04-11') },
];

export const defaultVisitPicker = Template.bind({});
defaultVisitPicker.args = {
  userAvailabilities,
  userBookedVisits,
  noAvailabilityMsg: 'No slot available for this date',
};
