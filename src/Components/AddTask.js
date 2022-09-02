import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import "./AddTask.css";
const AddTask = () => {
  const [Task, AddTask] = useState("");
  const { SetTasks } = useContext(TaskContext);
  const onChangeHandler = (e) => {
    AddTask(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    SetTasks((prevTasks) => {
      return [...prevTasks, { id: Math.random(), task: Task, done: false }];
    });
    AddTask("");
  };
  return (
    <form className="add-task" onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="add">Add task</label>
        <input type="text" onChange={onChangeHandler} value={Task} />
      </div>
      <button disabled={!Task}>Create</button>
    </form>
  );
};
export default AddTask;
