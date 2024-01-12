import { Configuration } from '../configuration/Configuration';

//TODO: add specific configuration for local development and or fetch from .env / github for secrets
export default {
  jobcard: {
    showImage: false,
    showDates: false,
  },
} as Configuration;
