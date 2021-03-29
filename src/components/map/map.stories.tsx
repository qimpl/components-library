import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Map, { MapProps } from '.';

export default {
  title: 'Qimpl/Map',
  component: Map,
} as Meta;

const Template: Story<MapProps> = (args) => <Map {...args} />;

export const defaultMap = Template.bind({});
defaultMap.args = {
  googleApiKey: '',
  markers: [{ lat: 50.62925, lng: 3.057256 }],
};
