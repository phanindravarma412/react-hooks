import React, { useEffect, useState, useRef } from "react";

const UseRefPreviousInput = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    console.log(`name was ${name}`);
    prevName.current = name;
    console.log(`prevName was ${prevName.current}`);
  }, [name]);

  return (
    <React.Fragment>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h3>
        My name is {name} and is used to be {prevName.current}
      </h3>
    </React.Fragment>
  );
};

export default UseRefPreviousInput;
