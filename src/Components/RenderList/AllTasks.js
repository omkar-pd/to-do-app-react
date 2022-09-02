import React, { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { FaTrash } from "react-icons/fa";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AllTasks = ({ ToggleDelete, ShowModal, SetShowModal }) => {
  const { Tasks, SetTasks } = useContext(TaskContext);

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
      Tasks.filter(() => {
        return SetTasks([]);
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
          {Tasks.map((list, id) => {
            return (
              <Card className="list-item" key={id}>
                <input
                  type="checkbox"
                  defaultChecked={list.done}
                  value={list.id}
                  id={list.id}
                />
                <label
                  htmlFor={list.id}
                  className={list.done ? "task-done" : undefined}
                >
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
export default AllTasks;
