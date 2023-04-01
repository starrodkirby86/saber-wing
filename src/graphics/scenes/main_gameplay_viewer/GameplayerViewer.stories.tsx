import React from 'react';
import { Story, Meta } from '@storybook/react';
import GameplayViewer, { GameplayViewerProps } from './GameplayViewer';

export default {
  title: 'GameplayViewer',
  component: GameplayViewer,
} as Meta;

const Template: Story<GameplayViewerProps> = (args) => (
    <GameplayViewer {...args} />
);

export const defaultStory = Template.bind({});

defaultStory.args = {
};
