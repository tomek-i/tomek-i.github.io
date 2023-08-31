import { Configuration } from '../config';

//TODO: add specific configuration for local development and or fetch from .env / github for secrets
export default {
  jobcard: {
    showImage: false,
    showDates: false,
  },
  profile: {
    name: process.env.REACT_PROFILE_NAME ?? 'Thomas Iwainski',
    position: process.env.REACT_PROFILE_POSITION ?? 'Senior Software Engineer',
  },
} as Configuration;
