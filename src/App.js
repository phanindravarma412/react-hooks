import React, { Fragment, createContext } from "react";

import "./App.css";
import UseCallbackExample from "./components/UseCallback/UseCallbackExample";

export const UserContext = createContext();

function App() {
  return (
    <Fragment>
      <UserContext.Provider value={"Hello"}>
        <UseCallbackExample />
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
