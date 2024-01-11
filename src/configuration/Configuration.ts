import { Level } from 'pino';
import { Environment } from './Environment';

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
