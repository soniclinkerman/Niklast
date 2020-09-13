import React, { createContext, useState } from 'react';

export const Context = createContext(true);

export default ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const store = {
    tasksState: [tasks, setTasks],
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
