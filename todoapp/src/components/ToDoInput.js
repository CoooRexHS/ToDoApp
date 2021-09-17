import React from 'react';
import './ToDoInput.css';

const ToDoInput = () => {
  return (
    <div className="todoinput">
      <input className="main-input" placeholder="ToDo Name..." />
      <select name="Category">
        <option value="value1">1</option>
        <option value="value2">2</option>
        <option value="value3">3</option>
      </select>
      <button type="button">Create</button>
    </div>
  );
};

export default ToDoInput;
