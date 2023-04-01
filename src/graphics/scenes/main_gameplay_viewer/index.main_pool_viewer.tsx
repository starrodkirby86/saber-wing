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
    <>
      <h1>Current Pool Standings</h1>
      <PoolViewer pool={pools[currentPoolIndex]} />
    </>
  );
}

ReactDOM.render(<ScenePoolViewer />, document.getElementById('root'));
