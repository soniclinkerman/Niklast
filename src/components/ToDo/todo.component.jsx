import React, { useState } from "react";
import CreateTasks from "./CreateTasks/create-tasks.component";
import Task from "./Task/task.component";
function ToDo() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateTasks onAdd={addTask} />
      {tasks.map((input, index) => {
        return (
          <Task key={index} id={index} task={input} onDelete={deleteTask} />
        );
      })}
    </div>
  );
}

export default ToDo;
