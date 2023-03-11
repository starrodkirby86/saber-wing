import type { NodeCG } from '../../../../types/server';

const sampleNodeCGFunction = (nodecg: NodeCG) => {
  nodecg.sendMessage('hello');
};

export default sampleNodeCGFunction;
