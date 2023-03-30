import React from 'react';
import _ from 'lodash';
import { Player, Pool } from '../../../common/types';

export interface BracketPoolViewerProps {
  pools: Pool[];
}

// TODO: BRACKET POOL SCENE
/*
  Pool Bracket Scene:
  - Do the basic programming for setting up the pools
  - We need to have six displayable pools on screen, so use the flexbox layouting or something
  - The module itself should be a light version of the pool viewer
  - Then we need another component that's on Storybook showing all the modules organized together
*/

const MiniPoolViewer = ({ pool, index }: { pool: Pool, index: number }) => {
  const sortedPool = _.orderBy(pool, ['wins'], ['desc']);
  return (
    <div className='p-4 h-full bg-transparent'>
      <div className="bg-blue-700 px-4 py-2 rounded-t-lg">
        <h1 className="font-bold text-xl text-white">Pool {index + 1}</h1>
      </div>
      <div className='grid grid-cols-3 h-full py-2 rounded-b-lg border-l-4 border-r-4 border-b-4 border-black'>
        {sortedPool?.map(({ player, wins }, index) => {
          return (
            <>
              <div
                className={
                  `col-span-2 flex items-center justify-center` +
                  (index === 0 ? ' text-green-500' : '')
                }
                key={`${player.name}-${index}-pool-viewer-node`}
              >
                {player.name}
              </div>
              <div
                className={
                  `col-span-1 flex items-center justify-center` +
                  (index === 0 ? ' text-green-500' : '')
                }
                key={`${player.name}-${index}-pool-wins-viewer-node`}
              >
                {wins}
              </div>
            </>
          );
        })}
      </div>
    </div>
  )
};

const BracketPoolViewer = ({ pools }: BracketPoolViewerProps) => {
  return (
    <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
      {
        pools.map((pool, index) => (
          <MiniPoolViewer key={`bracket-pool-${index}`} pool={pool} index={index} />
        ))
      }
    </div>
  );
};

export default BracketPoolViewer;
