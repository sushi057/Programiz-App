import React from "react";

function Job(props) {
  const { job } = props;
  return (
    <div className="main">
      <div className="left-part">
        <img src={job.company_logo} alt="job logo" />
        <div className="job-details">
          <div className="top-deati">
            <p className="company">{job.company}</p>
            <div className="job-features"></div>
          </div>

          <h2 className="job-title">{job.position}</h2>

          <div className="bottom-details">
            <p className="job-time">{job.posted_on}</p>
            <p className="job-timing">{job.timing}</p>
            <p className="location">{job.location}</p>
          </div>
        </div>
      </div>
      <div className="right-part"></div>
    </div>
  );
}

export default Job;
