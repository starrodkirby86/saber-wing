import React from 'react';
import { Story, Meta } from '@storybook/react';
import BracketPoolViewer, { BracketPoolViewerProps } from './BracketPoolViewer';
import { SAMPLE_POOLS } from '../../../common/samples';
import _ from 'lodash';

export default {
  title: 'Bracket Pool Viewer',
  component: BracketPoolViewer,
} as Meta;

const Template: Story<BracketPoolViewerProps> = (args) => (
  <div className='h-5/6'>
    <BracketPoolViewer {...args} />
  </div>
);

export const defaultStory = Template.bind({});

defaultStory.args = {
  pools: _.take(SAMPLE_POOLS, 6),
};
