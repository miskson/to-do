import React, { useEffect, useState } from "react";
import "./App.css";
import { AppButton } from "./components/AppButton";
import { Task } from "./components/Task";

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
            console.log(list);
            return (
              <Task
                text={elem.text}
                index={index}
                taskList={list}
                refresher={setList}
              />
            );
          })
          .reverse()}
      </main>
    </div>
  );
}

export default App;
