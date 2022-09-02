import React from "react";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      value={props.value}
      className={props.className}
    >
      {props.children}
    </button>
  );
};
export default Button;
