import React from 'react';
import _ from 'lodash';
import './style.css';

export interface GameplayViewerProps {
}

const GameplayViewer = ({ }: GameplayViewerProps) => {
  return <div className="w-[1920px] h-[1080px] bg-red-700">
    <div className="absolute w-4 h-4 bg-blue-400 left-[960px] top-[540px]" />
    <p className="absolute left-[0px] top-[180px] text-[48pt] text-right">KAY0SS</p>
    <p className="absolute left-[1617px] top-[180px] text-[48pt] text-left">KAY0SS</p>
  </div>;
};

export default GameplayViewer;
