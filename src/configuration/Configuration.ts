import { Environment } from './Environment';

export interface Configuration {
  environment: Environment;
  logLevel: string;
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
