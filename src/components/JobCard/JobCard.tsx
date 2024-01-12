import { ReactNode } from 'react';

import { Config } from '../../configuration';
import { JobCardContext } from '../../context/JobCardContext';
import { Company, Job } from '../../types';
import { JobCardDescription } from './JobCardDescription';
import { JobCardImage } from './JobCardImage';
import { JobCardInfo } from './JobCardInfo';
import { JobCardResponsibilities } from './JobCardResponsibilities';
import { JobCardTitle } from './JobCardTitle';

interface JobCardProps {
  job: Job;
  company: Company;
  image?: ReactNode;
  info?: ReactNode;
}

export function JobCard({ job, company, image, info }: JobCardProps) {
  return (
    <JobCardContext.Provider value={{ job, company }}>
      <div className="job-cardtimelime_item">
        <div className="job-card_inner">
          {Config().jobcard?.showImage && image}
          {info}
        </div>
        <div className="job-card_arrow"></div>
      </div>
    </JobCardContext.Provider>
  );
}

JobCard.Image = JobCardImage;
JobCard.Info = JobCardInfo;
JobCard.Title = JobCardTitle;
JobCard.Description = JobCardDescription;
JobCard.Responsibilities = JobCardResponsibilities;
