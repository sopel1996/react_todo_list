import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { ListItem } from '../listItem'

export const ToDoList = ({todoList,setTodoList}) => {

  return (
    <>
      {
        todoList.map(el=>{
          return <ListItem el={el} key={uuidv4()} todoList={todoList} setTodoList={setTodoList}/>
        })
      }
    </>
  )
}
