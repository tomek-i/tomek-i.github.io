import { EnvironmentTypes } from './EnvironmentTypes';

//TODO: probably there is an easier way to allocate that, that works when extending the enum

export type Environment =
  | EnvironmentTypes.LOCAL
  | EnvironmentTypes.PRODUTION
  | string;
