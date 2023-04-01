import React from 'react';
import ReactDOM from 'react-dom';
import { Pool } from '../../../common/types';
import MultiPoolEditor, {
    MultiPoolEditorFormInput,
} from '../PoolManager';
import ReactJson from 'react-json-view';
import MainGameplayForm from './MainGameplayForm';
import CommentaryForm from './CommentaryForm';

export interface DashboardProps {
    pools: Pool[];
    submitHandler: (data: MultiPoolEditorFormInput, currentPoolIndex: number) => void;
    mainGameplaySubmitHandler: (data: any) => void;
    commentarySubmitHandler: (data: any) => void;
    resetPoolsHandler: () => void;
};

const Dashboard = ({ pools, submitHandler, mainGameplaySubmitHandler, commentarySubmitHandler, resetPoolsHandler }: DashboardProps) => {
    return (
        <div>
            <MultiPoolEditor pools={pools} submitHandler={submitHandler} />
            <br />
            <div id="Gameplay Form">
                <div className="bg-green-700 px-4 py-2 flex items-center rounded-t-lg">
                    <h1 className="font-bold text-xl text-white">Gameplay Viewer</h1>
                </div>
                <div className='border rounded-b-md p-2 bg-white'>
                    <MainGameplayForm handleGameplaySubmit={mainGameplaySubmitHandler} />
                </div>
            </div>
            <br />
            <div id="Commentary Form">
                <div className="bg-pink-700 px-4 py-2 flex items-center rounded-t-lg">
                    <h1 className="font-bold text-xl text-white">Commentary</h1>
                </div>
                <div className='border rounded-b-md p-2 bg-white'>
                    <CommentaryForm handleCommentarySubmit={commentarySubmitHandler} />
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
            <br />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={resetPoolsHandler}>RESET POOLS</button>
        </div>
    );
};

export default Dashboard;
