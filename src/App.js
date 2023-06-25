import "./App.css";
import Job from "./components/Job";
import Filter from "./components/Filter";
import jobLists from "./assets/jobLists";
import { useState } from "react";

function App() {
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

  function removeCurrentTag(key) {
    setSelectKeywords((prevItem) => {
      // let index = selectKeywords.indexOf(key);
      // const removeKeywords = [...prevItem];
      // removeKeywords.splice(index, 1);
      // console.log(removeKeywords);

      // console.log(key);
      // return removeKeywords;

      console.log(key);
      const deleteKeywords = prevItem.filter((item) => item !== key);
      console.log(deleteKeywords);
      return deleteKeywords;
    });
    console.log(selectKeywords);
  }

  return (
    <div className="App">
      <div className="filter-bar">
        {selectKeywords.length !== 0 && (
          <div className="key-filter">
            <div className="filter-words">
              {selectKeywords.map((item) => (
                <Filter
                  filterWords={item}
                  removeCurrentTag={() => {
                    removeCurrentTag(item);
                  }}
                />
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
      </div>
      {jobLists.map((item) => {
        let intersectArray = selectKeywords.filter(
          (i) => !item.keywords.includes(i)
        );
        console.log(`The smilar tags are ${intersectArray}`);

        if (selectKeywords.length === 0) {
          return <Job job={item} addKeywords={addKeywords} />;
        } else {
          if (intersectArray.length === 0)
            return <Job job={item} addKeywords={addKeywords} />;
        }
      })}
    </div>
  );
}

export default App;
