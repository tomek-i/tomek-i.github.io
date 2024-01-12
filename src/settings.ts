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
    name: 'Thomas Iwainski',
    position: 'Senior Software Engineer',
    contact: {
      email: {
        value: 'tomek.iwainski@gmail.com',
        show: true,
      },
      phone: {
        value: '',
        show: false,
      },
    },
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
