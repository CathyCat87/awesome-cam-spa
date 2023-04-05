import React from "react";

export const PageLoader = () => {
  const loadingImg = "/loader.svg";

  return (
      <div className="loader">
        <img src={ loadingImg } alt="Loading..." />
      </div>
  )
};
