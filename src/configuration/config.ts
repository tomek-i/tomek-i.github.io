import { Level } from 'pino';

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
}

export interface ProcessVariables {
  ENV?: Environment;
  LOG_LEVEL?: Level;
}

export const getLocalConfig = (processVariables: ProcessVariables): Config => {
  return {
    environment: EnvironmentTypes.LOCAL,
    logLevel: processVariables.LOG_LEVEL ?? 'debug',
  };
};
export const getProductionConfig = (
  processVariables: ProcessVariables
): Config => {
  return {
    environment: EnvironmentTypes.PRODUTION,
    logLevel: processVariables.LOG_LEVEL ?? 'error',
  };
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
