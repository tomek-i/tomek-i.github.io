import { Environment } from './Environment';

export interface Configuration {
  environment: Environment;
  logLevel: string;

  urls: {
    workDetails: string;
    projectDetails: string;
  };
  jobcard: {
    showImage: boolean;
    showDates: boolean;
  };
}
