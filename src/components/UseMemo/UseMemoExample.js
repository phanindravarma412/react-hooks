import React, { useState, useMemo } from "react";

const UseMemoExample = (props) => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <React.Fragment>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </React.Fragment>
  );
};

export default UseMemoExample;

function slowFunction(num) {
  console.log("Calling slot function");

  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
