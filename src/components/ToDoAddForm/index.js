import React, {useContext, useEffect } from 'react'
import ListContext from "../../contexts/ListContext";
import "./index.css";

import { v4 as uuidv4 } from "uuid";

export const ToDoAddForm = () => {
  const { todoList, setTodoList } = useContext(ListContext);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTodoList((prevState)=>[...prevState, {
      id: uuidv4(), done: false, name:e.target[0].value
    }]);
    e.target[0].value = ''
  }


  return (
    <>
        <form onSubmit={handleSubmit} className='stickyForm'>
            <input id="newTask" name="newTask" className='stickyForm_taskInput' 
            placeholder="Введите задачу"
            />
            <button type="submit" className='stickyForm_submitBtn'>Добавить</button>
        </form>
    </>
  )
}
