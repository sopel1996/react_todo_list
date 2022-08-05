import React, {useContext } from 'react'
import { v4 as uuidv4 } from "uuid";
import { ListItem } from '../listItem'
import ListContext from "../../contexts/ListContext";

export const ToDoList = () => {
  const { todoList } = useContext(ListContext);

  return (
    <div className='todoList_list'>
      {
        todoList.map((el, index)=>{
          return <ListItem key={uuidv4()} el={el} id={index+1}/>
        })
      }
    </div>
  )
}
