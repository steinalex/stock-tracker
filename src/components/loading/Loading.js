import React from "react";
import "./Loading.css";

export const Loading = ({ loaded, render }) => {
  if (!loaded) {
    return <div className="loading-spinner"></div>;
  }
  return render();
};
