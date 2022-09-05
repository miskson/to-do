import { useEffect, useState } from "react";

interface TaskWindowProps {
  text: string;
}

export const TaskWindow = ({ text }: TaskWindowProps) => {
  let [textBuffer, setTextBuffer] = useState<string | undefined>(text);
  let [modifiedText, setModifiedText] = useState<string | undefined>(text);
  const [edit, setEdit] = useState(false);
  type colorOptions = {
    [key: string]: string;
  };
  const colors: colorOptions = {
    "1": "orange",
    "2": "yellow",
    "3": "transparent",
  };
  const [priority, setPriority] = useState<string>("1");

  return (
    <>
      {edit ? (
        <div
          style={{
            border: "2px solid purple",
            backgroundColor: colors[priority],
          }}
        >
          <textarea
            name="edit-task-name"
            id="task-edit"
            cols={30}
            rows={10}
            onChange={(e) => setModifiedText(e.target.value)}
            value={modifiedText}
          />

          <button
            onClick={() => {
              setEdit(true);
              setTextBuffer(modifiedText);
              setEdit(false);
            }}
            disabled={!modifiedText}
          >
            Save
          </button>
          <button>Delete</button>
          <button
            onClick={() => {
              setEdit(false);
              setModifiedText(textBuffer);
            }}
          >
            cancel
          </button>
          <select
            name="task-priority"
            id="task-prior"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">Urgent</option>
            <option value="2">Regular</option>
            <option value="3">Not urgent</option>
          </select>
        </div>
      ) : (
        <div
          style={{
            border: "2px solid purple",
            backgroundColor: colors[priority],
          }}
        >
          <button onClick={() => setEdit(true)}>Edit</button>
          <select
            name="task-priority"
            id="task-prior"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">Urgent</option>
            <option value="2">Regular</option>
            <option value="3">Not urgent</option>
          </select>
          <pre>{textBuffer}</pre>
        </div>
      )}
    </>
  );
};
