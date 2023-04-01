import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Dashboard, { DashboardProps } from '.';
import { MultiPoolEditorFormInput } from '../PoolManager';
import { MAP_POOL_DICT_TO_ARRAYS } from '../../../common/PLAYER_DATA';

export default {
  title: 'Dashboard',
  component: Dashboard,
} as Meta;

const Template: Story<DashboardProps> = (args) => {
  const submitHandler = ({ pool: data }: MultiPoolEditorFormInput, currentPoolIndex: number) => {
    console.log('Does not do anything, this is for layouting only');
  };

  const testSubmitHandler = (data: any) => { console.log('for layouting only') }

  return (<Dashboard pools={args.pools} submitHandler={submitHandler} mainGameplaySubmitHandler={testSubmitHandler} commentarySubmitHandler={testSubmitHandler} resetPoolsHandler={() => console.log('foo')} />)
};

export const defaultStory = Template.bind({});

defaultStory.args = {
  pools: MAP_POOL_DICT_TO_ARRAYS(),
};