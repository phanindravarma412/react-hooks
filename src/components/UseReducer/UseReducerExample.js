import React, { useReducer } from "react";

const initialCount = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <center>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </center>
  );
};

export default UseReducerExample;
