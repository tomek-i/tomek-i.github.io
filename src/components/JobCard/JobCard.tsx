import { ReactNode } from "react";
import { JobCardDescription } from "./JobCardDescription";
import { JobCardImage } from "./JobCardImage";
import { JobCardInfo } from "./JobCardInfo";
import { JobCardTitle } from "./JobCardTitle";
import { JobCardContext, Job } from "./useCardContext";

interface JobCardProps {
  job: Job;
  image?: ReactNode;
  info?: ReactNode;
}

function JobCard({ job, image, info }: JobCardProps) {
  return (
    <JobCardContext.Provider value={{ job }}>
      <div className="-card_item">
        <div className="-card_inner">
          {image}
          {info}
        </div>
        <div className="-card_arrow"></div>
      </div>
    </JobCardContext.Provider>
  );
}
JobCard.Image = JobCardImage;
JobCard.Info = JobCardInfo;
JobCard.Title = JobCardTitle;
JobCard.Description = JobCardDescription;

export default JobCard;
