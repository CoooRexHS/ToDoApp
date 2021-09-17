import React from 'react';
import './ToDoItem.css';

const ToDoItem = () => {
  return (
    <div className="todo-item">
      <input type="checkbox" className="check-input"></input>
      <div>Custom info</div>
    </div>
  );
};

export default ToDoItem;
