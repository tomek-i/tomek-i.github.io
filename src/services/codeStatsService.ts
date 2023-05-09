import { CodeStatsResponse } from '../types';

export const hello = () => {};

const getStats = async (username: string) => {
  const stats = (await fetch(
    `https://codestats.net/api/users/${username}`
  ).then(async (res) => await res.json())) as CodeStatsResponse;

  console.log({ stats });
};

export const CodeStats = {
  getStats,
};
