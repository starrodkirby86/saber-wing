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

function Dashboard() {
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
    <div>
      <MultiPoolEditor pools={pools} submitHandler={submitHandler} />
      <div>
        <div className="bg-blue-700 px-4 py-2 flex items-center rounded-t-lg">
          <h1 className="font-bold text-xl text-white">Pools Viewer</h1>
        </div>
        <div className='border rounded-b-md p-2 bg-white'>
          <ReactJson src={pools} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
