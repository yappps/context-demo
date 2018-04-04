import React, { Component } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import Component1 from "./Component1";
import { ColorContext } from "./ColorContext";
class App extends Component {
  render() {
    const loggedInUser = "jumpstarter";

    return (
      <div className="App">
        <UserContext.Provider value={loggedInUser}>
          {/* <ColorContext.Provider> */}
          <Component1 />
          {/* </ColorContext.Provider> */}
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
