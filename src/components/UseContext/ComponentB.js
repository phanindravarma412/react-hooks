import React from "react";

import { UserContext } from "../../App";

const ComponentB = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => <h1>I am in Component B {value}</h1>}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentB;
