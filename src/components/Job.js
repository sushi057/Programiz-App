import React from "react";

function Job() {
  return (
    <div className="main">
      <div className="left-part">
        <img src="" alt="job logo" />
        <div className="job-details">
          <div className="top-deati">
            <p className="company"></p>
            <div className="job-features"></div>
          </div>

          <h2 className="job-title">Front End</h2>

            <div className="bottom-details">
                <p className="job-time"></p>
                <p className="job-type"></p>
                <p className="location"></p>
            </div>
        </div>
      </div>
      <div className="right-part"></div>
    </div>
  );
}

export default Job;
