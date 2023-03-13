import React from 'react';
import { Player, Pool } from '../../../common/types';

export interface PoolViewerProps {
  pool: Pool;
}

const PoolViewer = ({ pool }: PoolViewerProps) => {
  const sortedPool = pool.sort((a, b) => b.wins - a.wins);
  return (
    <div className='grid grid-cols-3'>
      {sortedPool.map(({ player, wins }, index) => {
        return (
          <>
            <div
              className='col-span-2'
              key={`${player.name}-${index}-pool-editor-node`}
            >
              {player.name}
            </div>
            <div
              className='col-span-1'
              key={`${player.name}-${index}-pool-wins-editor-node`}
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
