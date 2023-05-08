import { useContext } from 'react';

import { TimelineItemContext } from '../../context';

export function useTimelineContext() {
  const context = useContext(TimelineItemContext);
  if (!context)
    throw new Error(
      'Timeline.* component must be rendered as child of Timeline component'
    );

  return context;
}
