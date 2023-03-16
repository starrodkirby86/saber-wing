import React from 'react';
import ReactDOM from 'react-dom';
import { useOnlyReplicantValue } from '../common/useReplicant';
import { Name } from './Name';
import '../common/style.css';
import PoolViewer from './components/PoolViewer/PoolViewer';
import { Pool } from '../common/types';
import { SAMPLE_POOL } from '../common/samples';

function Graphics() {
  const pool: Pool = useOnlyReplicantValue('pool', undefined, { defaultValue: SAMPLE_POOL });
  return (
    <>
      <h1>Current Pool Standings</h1>
      <PoolViewer pool={pool} />
    </>
  );
}

ReactDOM.render(<Graphics />, document.getElementById('root'));
