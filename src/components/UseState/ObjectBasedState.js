import React, { useState } from "react";

const ObjectBasedState = (props) => {
  const [state, setState] = useState({ count: 4, theme: "blue" });

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  return (
    <React.Fragment>
      <button onClick={decrementCount}>-</button>
      <h1>{state.count}</h1>
      <h1>{state.theme}</h1>
      <button onClick={incrementCount}>+</button>
    </React.Fragment>
  );
};

export default ObjectBasedState;
