import React, { Children } from "react";

interface AppButtonProps {
  text: string;
  clickHandler?: () => void;
}

export const AppButton = ({
  clickHandler,
  text,
}: AppButtonProps): JSX.Element => {
  return <button onClick={clickHandler}>{text}</button>;
};
