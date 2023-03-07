import React from "react";
import "./Task.css";

export const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};
