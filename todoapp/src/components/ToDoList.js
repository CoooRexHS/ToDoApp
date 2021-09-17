import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = () => {
  const [itemList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(itemList.concat(<ToDoItem key={itemList.length} />));
  };

  return (
    <div className="todo-list">
      <div className="todo-listheader">
        <h2>ToDo Name</h2>
        <button className="AddBtn" onClick={onAddBtnClick}>
          +
        </button>
      </div>
      {itemList}
    </div>
  );
};

export default ToDoList;
