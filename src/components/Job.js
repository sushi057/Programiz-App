import React, { useState } from "react";
import Filter from "./Filter";
import "../styles/job.css";

function Job(props) {
  const { job } = props;

  const [selectKeywords, setSelectKeywords] = useState([]);

  function addKeywords(key) {
    if (selectKeywords.includes(key)) {
      setSelectKeywords((prevItem) => {
        let index = selectKeywords.indexOf(key);
        const removeKeywords = [...prevItem];
        removeKeywords.splice(index, 1);
        return removeKeywords;
      });
    } else {
      setSelectKeywords((prevItem) => [...prevItem, key]);
    }

    console.log(selectKeywords);
  }

  function clearKeywords() {
    setSelectKeywords([]);
  }

  return (
    <div className="main">
      {/* <div className="filter-bar">
        {selectKeywords.length !== 0 && (
          <div className="key-filter">
            <div className="filter-words">
              {selectKeywords.map((item) => (
                <Filter filterWords={item} />
              ))}
            </div>
            <button
              className="clear-btn"
              onClick={() => {
                clearKeywords();
              }}
            >
              Clear
            </button>
          </div>
        )}
      </div> */}
      <div className="left-part">
        <img src={job.company_logo} alt="job logo" />
        <div className="job-details">
          <div className="top-detail">
            <p className="company">{job.company}</p>
            <div className="job-features"></div>
          </div>

          <p className="job-title">{job.position}</p>

          <div className="bottom-details">
            <p className="job-time">{job.posted_on}</p>
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
