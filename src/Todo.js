import React from "react";

const Todo = ({ value, dispatch }) => {
  return (
    <div>
      <span style={{ color: value.completed ? "red" : "black" }}>
        {value.name}
      </span>
      <button
        onClick={() => dispatch({ type: "toggle", payload: { id: value.id } })}
      >
        toggle
      </button>
      <button  onClick={() => dispatch({ type: "delete", payload: { id: value.id } })}>delete</button>
    </div>
  );
};

export default Todo;
