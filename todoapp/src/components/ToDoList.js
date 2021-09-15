import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = () => {
  return (
    <div className="todo-list">
      <h2>ToDo Name</h2>
      <ToDoItem />
    </div>
  );
};

export default ToDoList;
