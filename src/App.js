import React, { Fragment, createContext } from "react";

import "./App.css";
import ComponentA from "./components/UseContext/ComponentA";

export const UserContext = createContext();

function App() {
  return (
    <Fragment>
      <UserContext.Provider value={"Hello"}>
        <ComponentA />
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
