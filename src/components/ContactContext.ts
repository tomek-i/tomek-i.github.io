import { useContext } from 'react';

import { JobCardContext } from '../context';

export function useJobCardContext() {
  const context = useContext(JobCardContext);
  if (!context)
    throw new Error(
      'JobCard.* component must be rendered as child of JobCard component'
    );

  return context;
}
