import { createContext } from 'react';
import { Configuration } from '../configuration';

export const ConfigContext = createContext<{
  Configuration: Configuration;
} | null>(null);
