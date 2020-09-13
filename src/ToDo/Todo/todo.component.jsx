import React, { useState } from 'react';
import Button from '../../Button/button.component';
import UserInput from "../UserInput/user-input.component"

function ToDo(){
  const [input, setInput] = useState("");

  const onInputChange = (e) => {setInput(e.target.value)}

  return (
    <div className="App">

      <UserInput
      type="text"
      value={input}
      onChange={onInputChange}/>

      <Button text={"Add"} onClick={() => alert("Hello")}/>

     
    </div>
  );
}

export default ToDo;
