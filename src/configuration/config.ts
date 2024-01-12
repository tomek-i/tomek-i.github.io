import localConfig from '../configs/config.local';
import prodConfig from '../configs/config.prod';
import { Configuration } from './Configuration';
import { Environment } from './Environment';
import { EnvironmentTypes } from './EnvironmentTypes';
import { ProcessVariables } from './ProcessVariables';

/**
 * Retrieves the local configuration based on the provided process variables.
 * @param processVariables The process variables used to determine the configuration.
 * @returns The local configuration.
 */
const getLocalConfig = (
  processVariables: ProcessVariables
): Partial<Configuration> => {
  const current: Partial<Configuration> = {
    environment: EnvironmentTypes.LOCAL,
    logLevel: processVariables.LOG_LEVEL ?? 'debug',
    urls: {
      projectDetails: 'project',
      workDetails: 'career',
    },

    profile: {
      name: 'Tomek Iwainski',
      position: 'Software Engineer',
    },
    jobcard: {
      showImage: true,
      showDates: true,
    },
  };
  return {
    ...current,
    ...localConfig,
  };
};

/**
 * Retrieves the production configuration based on the provided process variables.
 * @param processVariables - The process variables used to determine the configuration.
 * @returns The production configuration.
 */
const getProductionConfig = (
  processVariables: ProcessVariables
): Partial<Configuration> => {
  const current: Partial<Configuration> = {
    ...getLocalConfig(processVariables),
    environment: EnvironmentTypes.PRODUTION,
    logLevel: processVariables.LOG_LEVEL ?? 'error',
  };
  return {
    ...current,
    ...prodConfig,
  };
};

/**
 * Retrieves the configuration based on the current environment.
 * @returns {Configuration} The partial configuration object.
 */
export const Config = (): Configuration => {
  return getConfig({ ENV: process.env.NODE_ENV }) as Configuration;
};

/**
 * Retrieves the configuration based on the provided process variables.
 * @param processVariables - The process variables used to determine the environment.
 * @returns The partial configuration object based on the environment.
 */
const getConfig = (
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

/**
 * Configuration object for the application.
 */
export const config = getConfig(process.env as unknown as ProcessVariables);
