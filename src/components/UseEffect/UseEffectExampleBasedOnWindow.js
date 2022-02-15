import React, { useState, useEffect } from "react";

const UseEffectExampleBasedOnWindow = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <React.Fragment>
      <div>{windowWidth}</div>
    </React.Fragment>
  );
};

export default UseEffectExampleBasedOnWindow;
