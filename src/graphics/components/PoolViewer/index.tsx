import React from 'react';
import _ from 'lodash';
import { Player, Pool } from '../../../common/types';

export interface PoolViewerProps {
  pool: Pool;
}

const PoolViewer = ({ pool }: PoolViewerProps) => {
  const sortedPool = _.orderBy(pool, ['wins'], ['desc']);
  return (
    <div className='grid grid-cols-3 h-full p-4 m-4 border-8 rounded-lg border-black'>
      {sortedPool?.map(({ player, wins }, index) => {
        return (
          <>
            <div
              className={
                `col-span-2 flex text-8xl items-center justify-center` +
                (index === 0 ? ' text-green-500' : '')
              }
              key={`${player.name}-${index}-pool-viewer-node`}
            >
              {player.name}
            </div>
            <div
              className={
                `col-span-1 flex text-8xl items-center justify-center` +
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
  );
};

export default PoolViewer;
