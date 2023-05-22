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

export interface Config {
  environment: Environment;
  logLevel: Level;
  jobcard?: {
    showImage?: boolean;
  };
}

export interface ProcessVariables {
  ENV?: Environment;
  LOG_LEVEL?: Level;
}

export const getLocalConfig = (processVariables: ProcessVariables): Config => {
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
): Config => {
  const current = {
    environment: EnvironmentTypes.PRODUTION,
    logLevel: processVariables.LOG_LEVEL ?? 'error',
  };
  return {
    ...current,
    ...prodConfig,
  };
};

export const Config = () => {
  return getConfig({ ENV: process.env.NODE_ENV });
};

export const getConfig = (processVariables: ProcessVariables): Config => {
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
