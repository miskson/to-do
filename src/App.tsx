import React, { useEffect, useState } from "react";
import "./App.css";
import { AppButton } from "./components/AppButton/AppButton";
import { Task } from "./components/Task";

function App() {
  const [list, setList] = useState<any[]>([]);
  const [flag, setFlag] = useState(false);
  const [newText, setNewText] = useState("");
  const [newPriority, setNewPriority] = useState<number>(1);

  const sortTaskList = (isPositive: boolean) => {
    const less: object[] = [];
    const more: object[] = [];
    const mid = list.concat();

    list.forEach((elem) => {
      if (elem.priority !== 2) {
        elem.priority > 2 ? more.push(elem) : less.push(elem);
        mid.splice(mid.indexOf(elem), 1);
      }
    });
    const sorted = [...less, ...mid, ...more];

    setList(isPositive ? sorted.reverse() : sorted);
  };

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
                newList.unshift({ text: newText, priority: newPriority });
                setNewText("");
                setNewPriority(1);
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
            <br />
            <label>
              Priority
              <select
                placeholder="Priority"
                onChange={(e) => setNewPriority(+e.target.value)}
              >
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
              </select>
            </label>
          </div>
        ) : (
          <>
            <AppButton clickHandler={() => setFlag(true)} text="Add task" />
            <AppButton
              clickHandler={() => sortTaskList(false)}
              text="Low first"
            />
            <AppButton
              clickHandler={() => sortTaskList(true)}
              text="High first"
            />
          </>
        )}
      </header>
      <main>
        {list.map((elem, index) => {
          console.log(typeof elem);
          console.log(list);
          return (
            <Task
              text={elem.text}
              priority={elem.priority}
              index={index}
              taskList={list}
              refresher={setList}
            />
          );
        })}
        {/* .reverse()} */}
      </main>
    </div>
  );
}

export default App;
