import _ from 'lodash';
import { Player, Pool } from './types';
import { faker } from '@faker-js/faker';

export const SAMPLE_POOL: Pool = [
  {
    player: {
      name: 'YOSHIKI',
      region: 'SoCal',
      handle: 'yottan20001202',
    },
    wins: 1,
  },
  {
    player: {
      name: 'YUISIN',
      region: 'NorCal',
      handle: 'yuisity',
    },
    wins: 0,
  },
  {
    player: {
      name: 'MARQQQ',
      region: 'USA',
      handle: '',
    },
    wins: 2,
  },
  {
    player: {
      name: 'KAY0SS',
      region: 'NorCal',
      handle: 'a40oz4Breakfast',
    },
    wins: 3,
  },
];

export const generateSamplePlayer = (): Player => (
  {
    name: faker.word.noun({ length: { min: 4, max: 8 } }).toUpperCase(),
    region: faker.address.county(),
    handle: faker.internet.userName(),
  }
);

export const generateSamplePool = (playerCount: number = 4): Pool => {
  return [
    ..._.range(0, playerCount).map(() => ({
      player: generateSamplePlayer(),
      wins: _.random(5),
    }))
  ];
}

export const SAMPLE_POOLS = _.range(0, 10).map(() => generateSamplePool());
