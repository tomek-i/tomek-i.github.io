import { useContext } from 'react';
import { ConfigContext } from '../../context';

export const useConfig = () => {
  // const [config, setConfig] = useState<Configuration>();
  const context = useContext(ConfigContext);
  if (!context)
    throw new Error(
      'Config.* component must be rendered as child of Config component'
    );

  // useEffect(() => {
  //   // fetch('/config.json')
  //   // .then((res) => res.json())
  //   // .then((config) => {
  //   //   setConfig(config);
  //   // });
  //   setConfig(Config());
  // }, []);

  // return { config };

  return context;
};
