import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState<any[]>([]);
  const [flag, setFlag] = useState(false);
  const [newText, setNewText] = useState("");

  return (
    <div className="App">
      <header>
        {flag ? (
          <div>
            <textarea
              name="new-task"
              id="new-task-field"
              cols={30}
              rows={10}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <br />
            <button
              onClick={() => {
                let newList: object[] = list.concat();
                newList.push({ text: newText });
                setNewText("");
                setList(newList);
                setFlag(false);
              }}
            >
              Save
            </button>
            <button onClick={() => setFlag(false)}>cancel</button>
          </div>
        ) : (
          <button onClick={() => setFlag(true)}>+</button>
        )}
      </header>
      <main>
        {list
          .map((elem, index) => (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <div>{elem.text}</div>
              <br /> <button>edit</button>
              <button
                onClick={() => {
                  let newList: object[] = list.concat();
                  newList.splice(index, 1);
                  setList(newList);
                }}
              >
                done
              </button>
            </div>
          ))
          .reverse()}
      </main>
    </div>
  );
}

export default App;
