import React from 'react';
import { Link } from 'react-router-dom';

import { Config } from '../../configuration';
import { TimelineItemContext } from '../../context/TimelineItemContext';
import { Timeline } from '../../types';
import { calculateTotalYears } from '../../utility';
import { JobCard } from '../JobCard';
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

  //TODO: we can hide the dates, but what would be cool if we hover over the ORB with the years to transition the dates in
  const metaComponent = (
    <>
      {Config().jobcard?.showDates && (
        <div className="job-card_meta-box">
          <TimelineItem.Meta />
        </div>
      )}
    </>
  );

  const pointComponent = (
    <div className="js-timeline-job-card_point-box job-card_point-box">
      <TimelineItem.Point>
        {timeline.job.dates.end &&
          `${calculateTotalYears(
            timeline.job.dates.start,
            timeline.job.dates.end
          )}yrs`}
      </TimelineItem.Point>
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
                to={`${Config().urls?.workDetails}/${timeline.company.name}`}
                className={
                  'px-4 py-2 border rounded my-4 block text-center hover:bg-white hover:text-black'
                }
              >
                Details
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
