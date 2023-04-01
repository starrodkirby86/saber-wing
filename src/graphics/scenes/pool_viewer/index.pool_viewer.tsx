import React from 'react';
import ReactDOM from 'react-dom';
import { useOnlyReplicantValue } from '../../../common/useReplicant';
import '../../../common/style.css';
import PoolViewer from '../../components/PoolViewer';
import { Pool } from '../../../common/types';

const ScenePoolViewer = () => {
  const pools: Pool[] = useOnlyReplicantValue('pools', undefined) || [];
  const currentPoolIndex: number = useOnlyReplicantValue('currentPoolIndex', undefined) || 0;
  return (
    <div className='h-5/6'>
      <PoolViewer pool={pools[currentPoolIndex]} />
    </div>
  );
}

ReactDOM.render(<ScenePoolViewer />, document.getElementById('root'));
