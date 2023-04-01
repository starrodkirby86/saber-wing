import React from 'react';
import ReactDOM from 'react-dom';
import { Pool } from '../../../common/types';
import { SAMPLE_POOLS } from '../../../common/samples';
import MultiPoolEditor, {
    MultiPoolEditorFormInput,
} from '../PoolManager';
import ReactJson from 'react-json-view';
import MainGameplayForm from './MainGameplayForm';

export interface DashboardProps {
    pools: Pool[];
    submitHandler: (data: MultiPoolEditorFormInput, currentPoolIndex: number) => void;
    mainGameplaySubmitHandler: (data: any) => void;
};

const Dashboard = ({ pools, submitHandler, mainGameplaySubmitHandler }: DashboardProps) => {
    return (
        <div>
            <MultiPoolEditor pools={pools} submitHandler={submitHandler} />
            <br />
            <div>
                <div className="bg-green-700 px-4 py-2 flex items-center rounded-t-lg">
                    <h1 className="font-bold text-xl text-white">Gameplay Viewer</h1>
                </div>
                <div className='border rounded-b-md p-2 bg-white'>
                    <MainGameplayForm handleGameplaySubmit={mainGameplaySubmitHandler} />
                </div>
            </div>
            <br />
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
};

export default Dashboard;
