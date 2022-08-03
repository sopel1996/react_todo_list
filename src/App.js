import React, { useEffect, useState } from 'react'
import { ToDoAddForm } from './components/toDoAddForm'
import { ToDoList } from './components/ToDoList'

import ListContext from "./contexts/ListContext";

export const App = () => {
  let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);

  useEffect(()=>{
    localStorage.setItem("todoList", JSON.stringify(todoList))
  },[todoList])

  return (
    <ListContext.Provider value={{ todoList, setTodoList }}>
    
      <ToDoAddForm />
      <ToDoList />
    </ListContext.Provider>
  )
}
