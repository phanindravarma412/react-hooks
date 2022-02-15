import React, { useState, useCallback } from "react";

import List from "./List";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);

  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (i) => {
      const input = isNaN(number) ? 0 : number;
      return [input + i, input + 1 + i, input + 2 + i];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackExample;
