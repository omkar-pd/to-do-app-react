import React, { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { FaTrash } from "react-icons/fa";
import Todo from "../RenderList/Todo";
import TasksDone from "..//RenderList/TasksDone";
import SelectList from "./SelectList";
import AllTasks from "../RenderList/AllTasks";
import Button from "../UI/Button";
import "./Lists.css";

const Lists = () => {
  const [RenderState, SetRenderState] = useState({
    todo: true,
    done: false,
    all: false,
  });
  const [ToggleDelete, SetToggleDelete] = useState(false);
  const [ShowModal, SetShowModal] = useState(false);
  const { Tasks, SetTasks } = useContext(TaskContext);

  const todoList = Tasks.filter((tasks) => {
    return !tasks.done;
  });

  const tasksDone = Tasks.filter((tasks) => {
    return tasks.done;
  });

  const ToggleDeleteButton = () => {
    ToggleDelete ? SetToggleDelete(false) : SetToggleDelete(true);
  };

  return (
    <>
      <div className="list-wrapper">
        <SelectList
          todoList={todoList}
          tasksDone={tasksDone}
          tasks={Tasks}
          RenderState={RenderState}
          SetRenderState={SetRenderState}
          ToggleDelete={ToggleDelete}
        ></SelectList>
        {RenderState.todo && (
          <Todo
            todoList={todoList}
            Tasks={Tasks}
            SetTasks={SetTasks}
            ToggleDelete={ToggleDelete}
            ShowModal={ShowModal}
            SetShowModal={SetShowModal}
          ></Todo>
        )}
        {RenderState.done && (
          <TasksDone
            tasksDone={tasksDone}
            Tasks={Tasks}
            SetTasks={SetTasks}
            ToggleDelete={ToggleDelete}
            ShowModal={ShowModal}
            SetShowModal={SetShowModal}
          ></TasksDone>
        )}
        {RenderState.all && (
          <AllTasks
            ToggleDelete={ToggleDelete}
            ShowModal={ShowModal}
            SetShowModal={SetShowModal}
          ></AllTasks>
        )}
        <Button
          onClick={ToggleDeleteButton}
          className={`toggle-buttons ${ToggleDelete && "toggled"}`}
        >
          <FaTrash></FaTrash>
        </Button>
      </div>
    </>
  );
};
export default Lists;
