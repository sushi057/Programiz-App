import React from "react";

function Filter(props) {
  const { filterWords } = props;

  function removeItem(el) {
    let element = el;
    element.remove();
  }
  return (
    <div className="filter">
      <div className="filter-key">{filterWords}</div>
      <div className="crossX" onClick={removeItem(this)}>
        X
      </div>
    </div>
  );
}

export default Filter;
