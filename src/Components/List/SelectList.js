import React from "react";
import { FaClipboardList, FaCheckCircle, FaListUl } from "react-icons/fa";
import Button from "../UI/Button";
import "./SelectList.css";

const SelectList = ({
  todoList,
  tasksDone,
  tasks,
  RenderState,
  SetRenderState,
}) => {
  const intialRenderState = {
    todo: false,
    done: false,
    all: false,
  };

  return (
    <>
      <div className="select-list">
        <div>
          <Button
            onClick={() => SetRenderState({ ...intialRenderState, todo: true })}
            className={RenderState.todo ? "selected" : undefined}
          >
            <FaClipboardList />
            <p>Todo {`(${todoList.length})`}</p>
          </Button>
        </div>
        <div>
          <Button
            onClick={() => SetRenderState({ ...intialRenderState, done: true })}
            className={RenderState.done ? "selected" : undefined}
          >
            <FaCheckCircle />
            <p>Done {`(${tasksDone.length})`}</p>
          </Button>
        </div>
        <div>
          <Button
            onClick={() => SetRenderState({ ...intialRenderState, all: true })}
            className={RenderState.all ? "selected" : undefined}
          >
            <FaListUl />
            <p>All {`(${tasks.length})`}</p>
          </Button>
        </div>
      </div>
    </>
  );
};
export default SelectList;
