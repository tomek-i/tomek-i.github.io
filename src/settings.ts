import { Config } from './configuration';

interface Settings {
  profile: {
    name: string;
    position: string;
    socials?: {
      type: string;
      url: string;
      show?: boolean; //true by default
    }[];
    contact?: {
      email?: {
        value: string;
        show: boolean;
      };
      phone?: {
        value: string;
        show: boolean;
      };
    };
  };
}
export const settings: Settings = {
  profile: {
    name: Config().profile?.name ?? '',
    position: Config().profile?.position ?? '',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/tomek-i',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/tomek-iw',
      },
      {
        type: 'stackoverflow',
        url: 'https://stackoverflow.com/users/4421557/tomek',
      },
    ],
  },
};
