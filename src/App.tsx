import React, { useEffect, useState } from "react";
import "./App.css";
import { AppButton } from "./components/AppButton";
import { TaskWindow } from "./components/TaskWindow";

type colorOptions = {
  [key: string]: string;
};
export const colors: colorOptions = {
  "1": "orange",
  "2": "yellow",
  "3": "transparent",
};

function App() {
  const tasklist = [
    {
      text: "somecooltask",
      id: 1,
      priority: "2",
    },
    {
      text: "somecooltask22222",
      id: 2,
      priority: "1",
    },
    {
      text: "somecooltask33333",
      id: 3,
      priority: "2",
    },
    {
      text: "somecooltask4444",
      id: 4,
      priority: "3",
    },
  ];

  const [tasks, setTasks] = useState(tasklist);
  const [isAdd, setIsAdd] = useState(false);
  const [newText, setNewText] = useState("");
  const [newPriority, setNewPriority] = useState("");

  function deleteTask(id: number) {
    const newList = tasks.concat();
    let index = tasks.findIndex((elem) => elem.id === id);
    console.log(index);
    newList.splice(index, 1);
    setTasks(newList);
  }

  function addTask(text: string, priority: string) {
    tasks.push({
      text: text,
      id: tasklist.length + 1,
      priority: priority,
    });
    setTasks(tasklist);
    console.log(tasks);
  }

  function returnRefreshed(
    arr: { text: string; id: number; priority: string }[]
  ) {
    let newarr = arr.map((elem) => (
      <TaskWindow
        text={elem.text}
        id={elem.id}
        priority={elem.priority}
        list={tasks}
        deleteHandler={deleteTask}
      />
    ));
    console.log("newarr", newarr);
    return newarr;
  }

  return (
    <div className="App">
      <main style={{ border: "10px solid red", height: "90vh" }}>
        {isAdd ? (
          <div
            style={{
              border: "2px solid purple",
              // backgroundColor: colors[newPriority],
            }}
          >
            <textarea
              name="edit-task-name"
              id="task-edit"
              cols={30}
              rows={10}
              onChange={(e) => setNewText(e.target.value)}
              value={newText}
            />
            <AppButton
              text="Save"
              clickHandler={() => {
                setIsAdd(false);
                addTask(newText, newPriority);
                setNewText("");
              }}
            />
            <AppButton
              text="Cancel"
              clickHandler={() => {
                setIsAdd(false);
                setNewText("");
              }}
            />
            <select
              name="task-priority"
              id="task-prior"
              defaultValue="1"
              onChange={(e) => setNewPriority(e.target.value)}
            >
              <option value="1">Urgent</option>
              <option value="2">Regular</option>
              <option value="3">Not urgent</option>
            </select>
          </div>
        ) : (
          <AppButton text="+" clickHandler={() => setIsAdd(true)} />
        )}
        <div style={{ border: "2px solid green", height: "96%" }}>
          {/* {returnRefreshed(tasks)} */}
          {tasks.map((elem) => (
            <TaskWindow
              text={elem.text}
              id={elem.id}
              priority={elem.priority}
              list={tasks}
              deleteHandler={deleteTask}
            />
          ))}
        </div>
      </main>
      <footer>
        <p>to-do by miskson :^|</p>
      </footer>
    </div>
  );
}

export default App;
