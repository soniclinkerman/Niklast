import React, { useState } from 'react';
import Button from '../../Button/button.component';
import UserInput from "../UserInput/user-input.component"

function CreateTasks(props){

  const [task, setTask] = useState("");

  const handleInputChange = (e) => { setTask(e.target.value)}

  const submitNote = (e) => {
    props.onAdd(task);
    e.preventDefault();
  }

  return(
    <div>
      <UserInput type="text" value={task} onChange={handleInputChange}/>
      <Button onClick={submitNote} text="add"/>
    </div>
  )

};

export default CreateTasks;
