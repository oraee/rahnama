import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const members = ["person1", "person2", "person3", "person4", "person5"];
  const [answersList, setAnswersList] = useState({
    person1: { first: "", last: "", city: "" },
    person2: { first: "", last: "", city: "" },
    person3: { first: "", last: "", city: "" },
    person4: { first: "", last: "", city: "" },
    person5: { first: "", last: "", city: "" },
  });

  return (
    <>
      <label>char: </label>
      <input />
      {Object.keys(answersList).map((member) => (
        <div key={member}>
          <span>{member} : </span>
          <label>first name: </label>
          <input
            onChange={(e) =>
              setAnswersList({
                ...answersList,
                member: { ...App, first: e.target.value },
              })
            }
          />
          <label>last name: </label>
          <input
            onChange={(e) =>
              setAnswersList({
                ...answersList,
                member: { ...App, last: e.target.value },
              })
            }
          />
          <label>city: </label>
          <input
            onChange={(e) =>
              setAnswersList({
                ...answersList,
                member: { ...App, first: e.target.value },
              })
            }
          />
        </div>
      ))}
      <button>response</button>
    </>
  );
}

export default App;
