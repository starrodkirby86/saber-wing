import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { useOnlyReplicantValue } from '../../../common/useReplicant';
import '../../../common/style.css';
import { Pool } from '../../../common/types';
import BracketPoolViewer from '../../components/BracketPoolViewer';

const SceneBracketPoolViewer = () => {
  // TODO: Use replicant to get pool range to take.
  const pools: Pool[] = useOnlyReplicantValue('pools', undefined) || [];
  return (
    <BracketPoolViewer pools={_.take(pools, 6)} />
  );
};

ReactDOM.render(<SceneBracketPoolViewer />, document.getElementById('root'));
