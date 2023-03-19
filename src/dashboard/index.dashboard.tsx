import React from 'react';
import ReactDOM from 'react-dom';
import { useReplicantValue } from '../common/useReplicant';
import '../common/style.css';
import { Pool } from '../common/types';
import { SAMPLE_POOL } from '../common/samples';
import MultiPoolEditor, {
  MultiPoolEditorFormInput,
} from './components/PoolManager/MultiPoolEditor';

function Dashboard() {
  const [pool, setPool] = useReplicantValue<Pool>('pool', undefined, {
    defaultValue: SAMPLE_POOL,
  });
  const submitHandler = ({ pool: data }: MultiPoolEditorFormInput) => {
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

  return <MultiPoolEditor pool={pool} submitHandler={submitHandler} />;
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
