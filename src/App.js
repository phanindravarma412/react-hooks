import React, { Fragment, createContext } from "react";

import "./App.css";
import UseReducerExample from "./components/UseReducer/UseReducerExample";
export const UserContext = createContext();

function App() {
  return (
    <Fragment>
      <UserContext.Provider value={"Hello"}>
        <UseReducerExample />
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
