import React, { useEffect, useState } from "react";
import "./App.css";
import { AppButton } from "./components/AppButton";

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
            <AppButton
              clickHandler={() => {
                let newList: object[] = list.concat();
                newList.push({ text: newText });
                setNewText("");
                setList(newList);
                setFlag(false);
              }}
              text="save"
            />
            <AppButton
              clickHandler={() => {
                setFlag(false);
                setNewText("");
              }}
              text="cancel"
            />
          </div>
        ) : (
          <AppButton clickHandler={() => setFlag(true)} text="+" />
        )}
      </header>
      <main>
        {list
          .map((elem, index) => {
            console.log(typeof elem);
            return (
              <div
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <>
                  <div>{elem.text}</div>
                  <br />
                  <AppButton text="edit" />
                  <AppButton
                    clickHandler={() => {
                      let newList: object[] = list.concat();
                      newList.splice(index, 1);
                      setList(newList);
                    }}
                    text="done"
                  />
                </>
              </div>
            );
          })
          .reverse()}
      </main>
    </div>
  );
}

export default App;
