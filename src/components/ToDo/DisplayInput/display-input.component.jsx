import React, { useState } from "react";
import Button from "../../Button/button.component";
import UserInput from "../UserInput/user-input.component";

function DisplayInput({ display }) {
  return (
    <div>
      {display.map((input) => {
        return <h3>{input}</h3>;
      })}
    </div>
  );
}

export default DisplayInput;
