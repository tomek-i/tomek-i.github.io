import React from 'react';
import { Link } from 'react-router-dom';

import { TimelineItemContext } from '../../context';
import { Timeline } from '../../types';
import { JobCard } from '../JobCard/JobCard';
import { JobTimelineItemMeta } from './JobTimelineItemMeta';
import { JobTimelineItemPoint } from './JobTimelineItemPoint';

interface TimelineItemProps {
  isAlternate: boolean;
  timeline: Timeline;
}
export function TimelineItem({ timeline, isAlternate }: TimelineItemProps) {
  /* 
  Timeline from here:
    https://codepen.io/alvarotrigo/pen/yLzBJaN
    https://www.youtube.com/watch?v=vPRdY87_SH0
*/

  const metaComponent = (
    <div className="job-card_meta-box">
      <TimelineItem.Meta />
    </div>
  );

  const pointComponent = (
    <div className="js-timeline-job-card_point-box job-card_point-box">
      <TimelineItem.Point />
    </div>
  );

  const content = isAlternate
    ? [metaComponent, pointComponent]
    : [pointComponent, metaComponent];

  return (
    <TimelineItemContext.Provider value={{ timeline }}>
      <div className="js-timeline_item timelime_item">
        <div className="job-card_box">
          {content.map((item, index) => (
            //TODO: is there a bettr way to use key and not rely on index?
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
        <JobCard
          job={timeline.job}
          company={timeline.company}
          image={<JobCard.Image />}
          info={
            <JobCard.Info>
              <JobCard.Title />
              <JobCard.Description />
              <JobCard.Responsibilities />
              <Link
                to={`${timeline.company.name}`}
                className={
                  'px-4 py-2 border rounded my-4 block text-center hover:bg-white hover:text-black'
                }
              >
                Case Study
              </Link>
            </JobCard.Info>
          }
        />
      </div>
    </TimelineItemContext.Provider>
  );
}

TimelineItem.Meta = JobTimelineItemMeta;
TimelineItem.Point = JobTimelineItemPoint;