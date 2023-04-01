import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { useOnlyReplicantValue } from '../../../common/useReplicant';
import '../../../common/style.css';
import { Pool } from '../../../common/types';
import BracketPoolViewer from '../../components/BracketPoolViewer';

const SceneBracketPoolViewerC = () => {
  const pools: Pool[] = useOnlyReplicantValue('pools', undefined) || [];
  return (
    <BracketPoolViewer pools={pools.slice(12, 16)} offset={12} />
  );
};

ReactDOM.render(<SceneBracketPoolViewerC />, document.getElementById('root'));
