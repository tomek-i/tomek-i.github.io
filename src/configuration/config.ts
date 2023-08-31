import { Level } from 'pino';

import localConfig from './configs/config.local';
import prodConfig from './configs/config.prod';

export enum EnvironmentTypes {
  PRODUTION = 'production',
  LOCAL = 'local',
}

//TODO: probably there is an easier way to allocate that, that works when extending the enum
export type Environment =
  | EnvironmentTypes.LOCAL
  | EnvironmentTypes.PRODUTION
  | string;

export interface Configuration {
  environment: Environment;
  logLevel: Level;
  profile: {
    name: string;
    position: string;
  };
  urls: {
    workDetails: string; //'career';
    projectDetails: string; //'project';
  };
  jobcard: {
    showImage: boolean;
    showDates: boolean;
  };
}

export interface ProcessVariables {
  ENV?: Environment;
  LOG_LEVEL?: Level;
}

export const getLocalConfig = (
  processVariables: ProcessVariables
): Partial<Configuration> => {
  const current = {
    environment: EnvironmentTypes.LOCAL,
    logLevel: processVariables.LOG_LEVEL ?? 'debug',
  };
  return {
    ...current,
    ...localConfig,
  };
};
export const getProductionConfig = (
  processVariables: ProcessVariables
): Partial<Configuration> => {
  const current = {
    environment: EnvironmentTypes.PRODUTION,
    logLevel: processVariables.LOG_LEVEL ?? 'error',
  };
  return {
    ...current,
    ...prodConfig,
  };
};

export const Config = (): Partial<Configuration> => {
  return getConfig({ ENV: process.env.NODE_ENV });
};

export const getConfig = (
  processVariables: ProcessVariables
): Partial<Configuration> => {
  const environment: Environment =
    processVariables.ENV || EnvironmentTypes.LOCAL;
  switch (environment) {
    case EnvironmentTypes.PRODUTION:
      return getProductionConfig(processVariables);
    case EnvironmentTypes.LOCAL:
    default:
      return getLocalConfig(processVariables);
  }
};

export const config = getConfig(process.env as unknown as ProcessVariables);
