import React, { useEffect, useState } from "react";
import "./App.css";
import { TaskWindow } from "./components/TaskWindow";

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

  function deleteTask(id: number) {
    const newList = tasks.concat();
    let index = tasks.findIndex((elem) => elem.id === id);
    console.log(index);
    newList.splice(index, 1);
    // console.log(newList);
    setTasks(newList);
  }

  // useEffect(() => {
  //   console.log("bang", tasks);
  // }, [tasks, setTasks]);

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
        <button>+</button>
        <div style={{ border: "2px solid green", height: "96%" }}>
          {/* {tasks.map((elem) => (
            <TaskWindow
              text={elem.text}
              id={elem.id}
              priority={elem.priority}
              list={tasks}
              deleteHandler={deleteTask}
            />
          ))} */}
          {returnRefreshed(tasks)}
        </div>
      </main>
      <footer>
        <p>to-do by miskson :^|</p>
      </footer>
    </div>
  );
}

export default App;
