import React, { useState, useEffect } from "react";
import "./Todo.css";
import { Task } from "./Task";

export const Todo = () => {
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // console.log(title, description);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, description }]);
    // console.log(task);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArray = task.filter((val, i) => {
      return i != index;
    });
    setTask(filteredArray);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">add</button>
      </form>
      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
      {/* <Task /> */}
    </div>
  );
};
