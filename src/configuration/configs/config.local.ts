import { Configuration } from '../Configuration';

//TODO: add specific configuration for local development and or fetch from .env / github for secrets
export default {
  jobcard: {
    showImage: true,
    showDates: true,
  },
  profile: {
    name: process.env.REACT_PROFILE_NAME ?? 'Thomas Iwainski',
    position: process.env.REACT_PROFILE_POSITION ?? 'Senior Software Engineer',
  },
} as Configuration;
