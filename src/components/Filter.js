import React from "react";
import "../styles/filter.css";

function Filter(props) {
  const { filterWords, removeCurrentTag } = props;

  return (
    <div className="filter">
      <div className="filter-key">{filterWords}</div>
      <div className="crossX" onClick={() => removeCurrentTag()}>
        X
      </div>
    </div>
  );
}

export default Filter;
