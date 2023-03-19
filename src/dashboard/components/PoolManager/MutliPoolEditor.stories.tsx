import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Pool } from '../../../common/types';
import MultiPoolEditor, { MultiPoolEditorFormInput, MultiPoolEditorProps } from './MultiPoolEditor';
import { SAMPLE_POOLS } from '../../../common/samples';
import PoolViewer from '../../../graphics/components/PoolViewer/PoolViewer';

export default {
  title: 'MultiPoolEditor',
  component: MultiPoolEditor,
} as Meta;

const Template: Story<MultiPoolEditorProps> = (args) => {
  const [currentPoolIndex, setCurrentPoolIndex] = useState(0); // the prop drilling is a bit inefficient here
  const [pools, setPools] = useState(args.pools);
  const submitHandler = ({ pool: data }: MultiPoolEditorFormInput, currentPoolIndex: number) => {
    const newData: Pool = pools[currentPoolIndex].map((poolRow, index) => {
        return ({
            ...poolRow,
            player: {
                ...poolRow.player,
                name: data[index].name,
            },
            wins: data[index].wins,
        });
    });
    setCurrentPoolIndex(currentPoolIndex);
    setPools([
      ..._.slice(pools, 0, currentPoolIndex),
      newData,
      ..._.slice(pools, currentPoolIndex + 1),
    ]);
  };

  console.log(SAMPLE_POOLS);
  return (
    <div>
      <MultiPoolEditor pools={pools} submitHandler={submitHandler} />
      <br />
      This viewer will update after submitting the form.
      <PoolViewer pool={pools[currentPoolIndex]} />
    </div>
  );
};

export const defaultStory = Template.bind({});

defaultStory.args = {
  pools: SAMPLE_POOLS,
};