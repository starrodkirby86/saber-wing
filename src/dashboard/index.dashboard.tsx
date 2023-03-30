import React from 'react';
import ReactDOM from 'react-dom';
import { useReplicantValue } from '../common/useReplicant';
import '../common/style.css';
import { Pool } from '../common/types';
import { SAMPLE_POOLS } from '../common/samples';
import MultiPoolEditor, {
  MultiPoolEditorFormInput,
} from './components/PoolManager/MultiPoolEditor';
import ReactJson from 'react-json-view';
import Dashboard from './components/Dashboard';

function NodeCGDashboard() {
  const [pools, setPools] = useReplicantValue<Pool[]>('pools', undefined, {
    defaultValue: SAMPLE_POOLS,
  });
  const [currentPoolIndex, setCurrentPoolIndex] = useReplicantValue<number>('currentPoolIndex', undefined, {
    defaultValue: 0
  });

  const submitHandler = ({ pool: data }: MultiPoolEditorFormInput, currentPoolIndex: number) => {
    const newData: Pool = pools[currentPoolIndex].map((poolRow, index) => {
      return ({
        ...poolRow,
        player: {
          ...poolRow.player,
          name: data[index].name,
        },
        wins: data[index].wins,
      });
    });
    setCurrentPoolIndex(currentPoolIndex);
    setPools([
      ...pools.slice(0, currentPoolIndex),
      newData,
      ...pools.slice(currentPoolIndex + 1),
    ]);
  };

  return (
    <Dashboard pools={pools} submitHandler={submitHandler} />
  );
}

ReactDOM.render(<NodeCGDashboard />, document.getElementById('root'));
