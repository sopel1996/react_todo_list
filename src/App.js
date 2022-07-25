import React, { useState } from 'react'
import { ToDoAddForm } from './components/toDoAddForm'
import { ToDoList } from './components/ToDoList'
export const App = () => {
  let [todoList, setTodoList] = useState('');

  return (
    <>
      <ToDoAddForm todoList={todoList} setTodoList={setTodoList}/>
      <ToDoList todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}
