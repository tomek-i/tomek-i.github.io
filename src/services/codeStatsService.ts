import { CodeStatsLanguageLevel, CodeStatsResponse } from '../types';

const LEVEL_FACTOR = 0.025;
const CODESTATS_URL = 'https://codestats.net/api/users/';

const calculateLevel = (xp?: number) => {
  if (!xp) return 0;

  return Math.floor(LEVEL_FACTOR * Math.sqrt(xp));
};

const getLevelPerLanguage = (
  response: CodeStatsResponse,
  exclude0: boolean = true
): CodeStatsLanguageLevel[] => {
  let data = Object.keys(response.languages).map((key) => {
    return {
      name: key,
      level: CodeStatsService.calculateLevel(response.languages[key].xps),
    };
  });
  if (exclude0) data = data.filter((item) => item.level > 0);
  return data;
};

const getStats = async (username: string) => {
  const url = `${CODESTATS_URL}${username}`;
  try {
    const stats = (await fetch(url).then(
      async (res) => await res.json()
    )) as CodeStatsResponse;

    return stats;
  } catch (error) {
    //TODO: log error perhaps?
  }
  return null;
};

export const CodeStatsService = {
  getStats,
  calculateLevel,
  getLevelPerLanguage,
};
