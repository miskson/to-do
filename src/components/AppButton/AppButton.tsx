import React, { Children } from "react";
import "./AppButton.css";

interface AppButtonProps {
  text: string;
  className?: string;
  clickHandler?: () => void;
}

export const AppButton = ({
  clickHandler,
  text,
  className,
}: AppButtonProps): JSX.Element => {
  return (
    <button onClick={clickHandler} className="to-do__add-btn">
      {text}
    </button>
  );
};
