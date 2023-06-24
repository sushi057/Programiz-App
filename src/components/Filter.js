import React from "react";

function Filter(props) {
  const { filterWords } = props;
  return (
    <div className="filter">
      <div className="filter-key">{filterWords}</div>
      <div className="crossX">X</div>
    </div>
  );
}

export default Filter;
