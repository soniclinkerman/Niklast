import React, { useState } from 'react';
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
    </div>
  );
}

export default ToDo;
