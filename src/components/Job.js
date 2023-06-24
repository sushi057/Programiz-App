import React from "react";
import "../styles/job.css";

function Job(props) {
  const { job, addKeywords } = props;

  return (
    <div className="main">
      <div className="left-part">
        <img src={job.company_logo} alt="job logo" />
        <div className="job-details">
          <div className="top-detail">
            <p className="company">{job.company}</p>
            <div className="job-features"></div>
          </div>

          <p className="job-title">{job.position}</p>

          <div className="bottom-details">
            <p className="job-time">
              {Math.floor((job.posted_on - 1680000000000) / 700000000)}d ago
            </p>
            <p className="job-timing">{job.timing}</p>
            <p className="location">{job.location}</p>
          </div>
        </div>
      </div>
      <div className="right-part">
        {job.keywords.map((item) => (
          <button
            key={item}
            className="keyword"
            onClick={() => addKeywords(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Job;
