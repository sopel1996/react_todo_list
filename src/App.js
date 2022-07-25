import React, { useEffect, useState } from 'react'
import { ToDoAddForm } from './components/toDoAddForm'
import { ToDoList } from './components/ToDoList'
export const App = () => {
  let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);

  useEffect(()=>{
    
  },[])

  return (
    <>
      <ToDoAddForm todoList={todoList} setTodoList={setTodoList}/>
      <ToDoList todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}
