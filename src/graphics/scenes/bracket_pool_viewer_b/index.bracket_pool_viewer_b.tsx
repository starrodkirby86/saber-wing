import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { useOnlyReplicantValue } from '../../../common/useReplicant';
import '../../../common/style.css';
import { Pool } from '../../../common/types';
import BracketPoolViewer from '../../components/BracketPoolViewer';

const SceneBracketPoolViewerB = () => {
  const pools: Pool[] = useOnlyReplicantValue('pools', undefined) || [];
  return (
    <BracketPoolViewer pools={pools.slice(6, 12)} offset={6} />
  );
};

ReactDOM.render(<SceneBracketPoolViewerB />, document.getElementById('root'));
