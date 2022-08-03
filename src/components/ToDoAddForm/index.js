import React, {useContext, useEffect } from 'react'
import ListContext from "../../contexts/ListContext";

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
        <h1> TODO List</h1>
        <form onSubmit={handleSubmit}>
            <input id="newTask" name="newTask" 
            placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    </>
  )
}
