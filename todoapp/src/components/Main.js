import React from 'react';
import ToDoList from './ToDoList';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
    </div>
  );
};

export default Main;
