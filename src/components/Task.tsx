import { stringify } from "querystring";
import React, { SetStateAction, useEffect, useState } from "react";
import { AppButton } from "./AppButton/AppButton";

interface TaskProps {
  text: string;
  priority: number;
  taskList: any[];
  index: number;
  refresher: React.Dispatch<SetStateAction<any[]>>;
}

interface Icolors {
  1: string;
  2: string;
  3: string;
}

export const Task = ({
  text,
  priority,
  taskList,
  index,
  refresher,
}: TaskProps): JSX.Element => {
  const [flag, setFlag] = useState(false);
  const [textBuf, setTextBuf] = useState(text);

  const colors: Icolors = {
    1: "blue",
    2: "orange",
    3: "red",
  };

  useEffect(() => {
    setTextBuf(text);
  }, [text]);

  return (
    <div
      style={{
        border: "2px solid",
        borderColor: colors[priority as keyof Icolors],
        margin: "10px",
        borderRadius: "5px",
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
