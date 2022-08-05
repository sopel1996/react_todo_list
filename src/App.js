import React, { useEffect, useState } from 'react'
import { ToDoAddForm } from './components/toDoAddForm'
import { ToDoList } from './components/ToDoList'
import { Header } from './components/Header'

import './app.css'

import ListContext from "./contexts/ListContext";

export const App = () => {
  let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);

  useEffect(()=>{
    localStorage.setItem("todoList", JSON.stringify(todoList))
  },[todoList])

  return (
    <div className='todoList'>
    <ListContext.Provider value={{ todoList, setTodoList }}>
    
      <Header />
      <ToDoAddForm />
      <ToDoList />
    </ListContext.Provider>
    </div>
  )
}
