import "./App.css";
import Job from "./components/Job";
import jobLists from "./assets/jobLists";

function App() {
  return (
    <div className="App">
      {jobLists.map((item) => (
        <Job job={item} />
      ))}
    </div>
  );
}

export default App;
