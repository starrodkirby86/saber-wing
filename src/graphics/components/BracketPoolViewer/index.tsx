import React from 'react';
import _ from 'lodash';
import { Player, Pool } from '../../../common/types';

export interface BracketPoolViewerProps {
  pools: Pool[];
  offset?: number;
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
      <div className="bg-[#cb8e52] px-4 py-2 rounded-t-lg">
        <h1 className="font-bold text-xl text-white font-[Poppins]">POOL {index + 1}</h1>
      </div>
      <div className='grid grid-cols-3 h-full py-2 rounded-b-lg border-l-4 border-r-4 border-b-4 border-[#503828]'>
        {sortedPool?.map(({ player, wins }, index) => {
          return (
            <>
              <div
                className={
                  `col-span-2 flex items-center justify-center font-[Poppins]` +
                  (index === 0 ? ' text-white bg-[#503828]' : ' text-[#282828]')
                }
                key={`${player.name}-${index}-pool-viewer-node`}
              >
                {player.name}
              </div>
              <div
                className={
                  `col-span-1 flex items-center justify-center font-[Poppins]` +
                  (index === 0 ? ' text-white bg-[#503828]' : ' text-[#282828]')
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

const BracketPoolViewer = ({ pools, offset }: BracketPoolViewerProps) => {
  return (
    <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
      {
        pools.map((pool, index) => (
          <MiniPoolViewer key={`bracket-pool-${index}`} pool={pool} index={index + (offset || 0)} />
        ))
      }
    </div>
  );
};

export default BracketPoolViewer;
