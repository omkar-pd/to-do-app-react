import React from "react";
import { FaTrash } from "react-icons/fa";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
const Todo = ({
  todoList,
  Tasks,
  SetTasks,
  ToggleDelete,
  ShowModal,
  SetShowModal,
}) => {
  const onClickHandler = (e) => {
    let id = Number(e.target.id);
    let list = Tasks.map((list) => {
      return list.id === id ? { ...list, done: !list.done } : { ...list };
    });
    SetTasks(list);
  };

  const DeleteTask = (e) => {
    SetTasks(
      Tasks.filter((list) => {
        return list.id !== Number(e.target.value);
      })
    );
  };

  const onCancle = () => {
    SetShowModal(false);
  };

  const ToggleModal = () => {
    SetShowModal(true);
  };

  const DeleteAllTasks = () => {
    SetTasks(
      Tasks.filter((tasks) => {
        return tasks.done;
      })
    );
    SetShowModal(false);
  };

  return (
    <>
      <Card className="list">
        {ShowModal && (
          <Modal onCancle={onCancle} onConfirm={DeleteAllTasks}></Modal>
        )}
        {ToggleDelete && (
          <Button className="delete-all-tasks" onClick={ToggleModal}>
            Delete All Tasks
          </Button>
        )}
        <div>
          {todoList.map((list, id) => {
            return (
              <Card className="list-item" key={id}>
                <input type="checkbox" value={list.id} id={list.id} />
                <label id={list.id} onClick={onClickHandler}>
                  {list.task}
                </label>
                {ToggleDelete && (
                  <Button value={list.id} onClick={DeleteTask}>
                    <FaTrash />
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </Card>
    </>
  );
};
export default Todo;
