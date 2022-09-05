import React from "react";
import "./App.css";
import { TaskWindow } from "./components/TaskWindow";

function App() {
  return (
    <div className="App">
      <div style={{ border: "10px solid red", height: "90vh" }}>
        <button>+</button>
        <div style={{ border: "2px solid green", height: "96%" }}>
          <TaskWindow text="some cool task realy importanw!" />
        </div>
      </div>
      <footer>
        <p>to-do by miskson :^|</p>
      </footer>
    </div>
  );
}

export default App;
