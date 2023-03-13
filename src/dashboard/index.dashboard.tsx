import React from 'react';
import ReactDOM from 'react-dom';
import { useReplicantValue } from '../common/useReplicant';
import '../../tailwind.css';
import { Pool } from '../common/types';
import { SAMPLE_POOL } from '../common/samples';
import PoolsEditor, {
  PoolEditorFormInput,
} from './components/PoolManager/PoolsEditor';

function Dashboard() {
  const [pool, setPool] = useReplicantValue<Pool>('pool', undefined, {
    defaultValue: SAMPLE_POOL,
  });
  const submitHandler = ({ pool: data }: PoolEditorFormInput) => {
    const newData: Pool = pool.map((poolRow, index) => {
      return {
        ...poolRow,
        player: {
          ...poolRow.player,
          name: data[index].name,
        },
        wins: data[index].wins,
      };
    });
    setPool(newData);
  };

  return <PoolsEditor pool={pool} submitHandler={submitHandler} />;
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
