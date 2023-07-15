import { useState } from "react";
import "./App.css";

function App() {
  const [char, setChar] = useState("");
  const [answersList, setAnswersList] = useState({
    person1: { first: "", last: "", city: "" },
    person2: { first: "", last: "", city: "" },
    person3: { first: "", last: "", city: "" },
    person4: { first: "", last: "", city: "" },
    person5: { first: "", last: "", city: "" },
  });
  const [res, setRes] = useState({
    person1: 0,
    person2: 0,
    person3: 0,
    person4: 0,
    person5: 0,
  });
  const finall = () => {
    for (const member in answersList) {
    }
  };

  return (
    <>
      <label>char: </label>
      <input defaultValue={char} onChange={(e) => setChar(e.target.value)} />
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
      <button onClick={finall}>response</button>
    </>
  );
}

export default App;
