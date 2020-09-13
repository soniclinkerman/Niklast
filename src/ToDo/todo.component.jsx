import React, { useState } from "react";
import DisplayInput from "./DisplayInput/display-input.component";
import CreateTasks from "./CreateTasks/create-tasks.component";

function ToDo() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }
  return (
    <div>
      <CreateTasks onAdd={addTask} />
      <DisplayInput display={tasks} />
    </div>
  );
}

export default ToDo;
