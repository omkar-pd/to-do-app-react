import React, { useState, createContext } from "react";

const TaskContext = createContext();

const TaskProvider = (props) => {
  const [Tasks, SetTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ Tasks, SetTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
