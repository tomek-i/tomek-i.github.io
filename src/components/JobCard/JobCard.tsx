import { ReactNode } from "react";
import { Job } from "../../types";
import { JobCardDescription } from "./JobCardDescription";
import { JobCardImage } from "./JobCardImage";
import { JobCardInfo } from "./JobCardInfo";
import { JobCardResponsibilities } from "./JobCardResponsibilities";
import { JobCardTitle } from "./JobCardTitle";
import { JobCardContext } from "./useCardContext";

interface JobCardProps {
  job: Job;
  image?: ReactNode;
  info?: ReactNode;
}

export function JobCard({ job, image, info }: JobCardProps) {
  return (
    <JobCardContext.Provider value={{ job }}>
      <div className="job-cardtimelime_item">
        <div className="job-card_inner">
          {image}
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
