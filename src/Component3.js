import React from "react";
import { UserContext } from "./UserContext";
import Component4 from "./Component4";

const Component3 = () => (
  <div>
    <UserContext.Consumer>
      {value => <h1>Hello {value}</h1>}
    </UserContext.Consumer>
    <Component4/>
  </div>
);

export default Component3;
