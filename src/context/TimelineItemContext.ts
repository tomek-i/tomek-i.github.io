import { createContext } from 'react';
import { Timeline } from '../types';

export const TimelineItemContext = createContext<{ timeline: Timeline } | null>(
  null
);
