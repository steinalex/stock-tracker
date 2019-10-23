import React from "react";
import "./Loading.css";

export const Loading = ({ loaded, render }) => {
  if (!loaded) {
    return (
      <div className="center-spinner">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return render();
};
