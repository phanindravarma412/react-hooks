import React, { useState, useMemo } from "react";

const UseMemoIncrement = (props) => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);

  const Factorial = useMemo(() => fact(number), [number]);

  return (
    <center>
        <h1>Fact: {Factorial}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter Increment</button>
      <br /> <br />
      <button onClick={() => setNumber(number + 1)}>Number Increment</button>
      <br /> <br />
      <h1>Counter : {counter}</h1>
    </center>
  );
};

const fact = (n) => {
  let output = 1;
  for (var i = n; i >= 1; i--) {
    output = output * i;
  }

  return output;
};

export default UseMemoIncrement;
