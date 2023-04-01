import React from 'react';
import ReactDOM from 'react-dom';
import { useReplicantValue } from '../common/useReplicant';
import '../common/style.css';
import { Pool } from '../common/types';
import MultiPoolEditor, {
  MultiPoolEditorFormInput,
} from './components/PoolManager';
import ReactJson from 'react-json-view';
import Dashboard from './components/Dashboard';
import { MAP_POOL_DICT_TO_ARRAYS } from '../common/PLAYER_DATA';

function NodeCGDashboard() {
  const [pools, setPools] = useReplicantValue<Pool[]>('pools', undefined, {
    defaultValue: MAP_POOL_DICT_TO_ARRAYS(),
  });

  const [currentPoolIndex, setCurrentPoolIndex] = useReplicantValue<number>('currentPoolIndex', undefined, {
    defaultValue: 0
  });

  const [mainGameplayReplicant, setMainGameplayReplicant] = useReplicantValue<Record<string, string>>('mainGameplay', undefined, {
    defaultValue: {
      player1: 'SUISEI05',
      player2: 'SUISEI06',
      player1Wins: '0',
      player2Wins: '0',
    },
  });

  const [commentaryReplicant, setCommentaryReplicant] = useReplicantValue<{ leftCommentator: Record<string, string>, rightCommentator: Record<string, string> }>('commentary', undefined, {
    defaultValue: {
      leftCommentator: {
        name: 'a',
        handle: 'b'
      },
      rightCommentator: {
        name: 'a',
        handle: 'b'
      },
    },
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

  const mainGameplaySubmitHandler = (data: Record<string, string>) => {
    setMainGameplayReplicant(data);
  };

  const commentarySubmitHandler = (data: Record<string, string>) => {
    setCommentaryReplicant({
      leftCommentator: {
        name: data.commentatorA,
        handle: data.commentatorAHandle,
      },
      rightCommentator: {
        name: data.commentatorB,
        handle: data.commentatorBHandle,
      },
    });
  };

  const resetPoolsHandler = () => {
    setPools(MAP_POOL_DICT_TO_ARRAYS());
  }

  return (
    <Dashboard pools={pools} submitHandler={submitHandler} mainGameplaySubmitHandler={mainGameplaySubmitHandler} commentarySubmitHandler={commentarySubmitHandler} resetPoolsHandler={resetPoolsHandler} />
  );
}

ReactDOM.render(<NodeCGDashboard />, document.getElementById('root'));
