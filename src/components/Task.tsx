import React, { SetStateAction, useEffect, useState } from "react";
import { AppButton } from "./AppButton";

interface TaskProps {
  text: string;
  taskList: any[];
  index: number;
  refresher: React.Dispatch<SetStateAction<any[]>>;
}

export const Task = ({
  text,
  taskList,
  index,
  refresher,
}: TaskProps): JSX.Element => {
  //todo: text editing
  const [flag, setFlag] = useState(false);
  const [textBuf, setTextBuf] = useState(text);

  useEffect(() => {
    setTextBuf(text);
  }, [text]);

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      {flag ? (
        <>
          <textarea
            name={`edittext_${index}`}
            cols={30}
            rows={10}
            value={textBuf}
            onChange={(e) => setTextBuf(e.target.value)}
          />
          <br />
          <AppButton
            text="save"
            clickHandler={() => {
              let newList: any[] = taskList.concat();
              newList[index].text = textBuf;
              setFlag(false);
              refresher(newList);
            }}
          />
          <AppButton text="cancel" clickHandler={() => setFlag(false)} />
        </>
      ) : (
        <>
          <div>{text}</div>
          <br />
          <AppButton text="edit" clickHandler={() => setFlag(true)} />
          <AppButton
            clickHandler={() => {
              let newList: object[] = taskList.concat();
              newList.splice(index, 1);
              refresher(newList);
            }}
            text="done"
          />
        </>
      )}
    </div>
  );
};
