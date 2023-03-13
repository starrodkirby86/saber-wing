import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Pool } from '../../../common/types';
import PoolsEditor, { PoolEditorFormInput, PoolsEditorProps } from './PoolsEditor';
import PoolViewer from '../../../graphics/components/PoolViewer/PoolViewer';

export default {
  title: 'PoolsEditor',
  component: PoolsEditor,
} as Meta;

const Template: Story<PoolsEditorProps> = (args) => {
  const [pool, setPool] = useState(args.pool);
  const submitHandler = ({ pool: data }: PoolEditorFormInput) => {
    console.log(pool, data);
    const newData: Pool = pool.map((poolRow, index) => {
        return ({
            ...poolRow,
            player: {
                ...poolRow.player,
                name: data[index].name,
            },
            wins: data[index].wins,
        });
    });
    console.log('Updating state...', newData);
    setPool(newData);
  };
  return (
    <div>
      <PoolsEditor pool={pool} submitHandler={submitHandler} />
      <br />
      <div className='border p-2 m-2 rounded-md'>
        <PoolViewer pool={pool} />
      </div>
    </div>
  );
};

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
