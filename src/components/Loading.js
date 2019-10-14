import React from "react";

export const Loading = ({ loaded, render }) => {
  if (!loaded) {
    return <div className="loading-spinner"></div>;
  }
  return render();
};
