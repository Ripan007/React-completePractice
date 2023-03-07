import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setInputValue(inputValue + 1);
  };

  const decrement = () => {
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    }
  };

  useEffect(() => {
    console.log("welcome to my journey to become a awesome react developer");
  }, []);

  return (
    <>
      <input type="text" placeholder="enter text" value={inputValue} />

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Form;

// ? learning
// ?useState
// ? useEffect

// ? useState => page rerender when there will be value change
// ? useEffect => when fist time page render the data present im the useEffect get printed
