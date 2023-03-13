export type Player = {
  name: string;
  region?: string;
  handle?: string;
};

export type PoolRow = {
  player: Player;
  wins: number;
};

export type Pool = PoolRow[];
