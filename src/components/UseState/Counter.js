import React, { useState } from "react";

function countInitial() {
  console.log("run function");
  return 4;
}

const Counter = (props) => {
  const [count, setCount] = useState(() => countInitial());

  function decrementCount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <React.Fragment>
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
    </React.Fragment>
  );
};

export default Counter;
