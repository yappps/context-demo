import { ColorContext } from "./ColorContext";
import React from "react";

const Component4 = () => (
  <div>
    <ColorContext.Consumer>
      {value => <p>ColorContext {value}</p>}
    </ColorContext.Consumer>
  </div>
);

export default Component4;
