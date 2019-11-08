import React, { FC } from "react";
import "./Loading.css";

type Loading = {
  loaded: string;
  render: () => JSX.Element;
};

export const Loading: FC<Loading> = ({ loaded, render }) => {
  if (!loaded) {
    return (
      <div className="center-spinner">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return render();
};
