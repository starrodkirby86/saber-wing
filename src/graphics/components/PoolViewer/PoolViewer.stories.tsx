import React from 'react';
import { Story, Meta } from '@storybook/react';
import PoolViewer, { PoolViewerProps } from '.';

export default {
  title: 'PoolViewer',
  component: PoolViewer,
} as Meta;

const Template: Story<PoolViewerProps> = (args) => (
  <div className='h-5/6'>
    <PoolViewer {...args} />
  </div>
);

export const defaultStory = Template.bind({});

defaultStory.args = {
  pool: [
    {
      player: {
        name: 'YOSHIKI',
        region: 'SoCal',
        handle: 'yottan20001202',
      },
      wins: 1,
    },
    {
      player: {
        name: 'YUISIN',
        region: 'NorCal',
        handle: 'yuisity',
      },
      wins: 0,
    },
    {
      player: {
        name: 'MARQQQ',
        region: 'USA',
        handle: '',
      },
      wins: 2,
    },
    {
      player: {
        name: 'KAY0SS',
        region: 'NorCal',
        handle: 'a40oz4Breakfast',
      },
      wins: 3,
    },
  ],
};
