import React from "react";
import Button from "./Button";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <h2>Clear All Tasks</h2>
        <p>Are you sure you want to remove all the tasks from the App?</p>
        <div className="actions">
          <Button onClick={props.onCancle} className="cancle">
            Cancle
          </Button>
          <Button onClick={props.onConfirm} className="confirm">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
