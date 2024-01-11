import { Level } from 'pino';
import { Environment } from './Environment';

export interface ProcessVariables {
  ENV?: Environment;
  LOG_LEVEL?: Level;
}
