import React from "react";
import Button from "../../Button/button.component";

const Task = ({ task, onDelete, id }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div>
      <p>{task}</p>
      <Button text="delete" onClick={handleClick} />
    </div>
  );
};

export default Task;
