import React from 'react';
import ReactDOM from 'react-dom';
import { useReplicantValue } from '../common/useReplicant';
import '../../tailwind.css';
import { Pool } from '../common/types';

function Dashboard() {
  const [name, setName] = useReplicantValue<Pool>('pool', undefined, {
    defaultValue: [
      {
        player: {
          name: 'YOSHIKI',
          region: 'SoCal',
          handle: 'yottan20001202',
        },
        wins: 1,
      },
    ],
  });
  return (
    <>
      <label>
        Name
      </label>
    </>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
