import { AppButton } from "./AppButton";

interface TaskProps {
    text: string;
}

export const Task = (task: TaskProps): JSX.Element => {
    //todo: text editing
    return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <>
        <div>{task?.text}</div>
        <br />
        <AppButton text="edit" />
        <AppButton
          clickHandler={() => {
            // let newList: object[] = list.concat();
            // newList.splice(index, 1);
            // setList(newList);
          }}
          text="done"
        />
      </>
    </div>
  );
};
