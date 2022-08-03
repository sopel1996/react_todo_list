import React, { useState, useContext } from 'react'
import cn from "classnames";
import "./index.css";
import ListContext from "../../contexts/ListContext";

export const ListItem = ({el, id}) => {  
  
  const { todoList, setTodoList } = useContext(ListContext);
  let [checkbox, setCheckbox] = useState(el.done)

  function changeCheckbox() {
    setCheckbox(!checkbox);
    let index = todoList.findIndex(elem =>elem.id === el.id);
    todoList[index].done = !todoList[index].done;
    setTodoList(todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }
  return (
    <div className={cn('ListItem', {'done': checkbox})} onClick={changeCheckbox}>
        <div className='ListItem_id'>{id}</div>
        <input type="checkbox" checked={checkbox} ></input>
        <div className='ListItem_done'>{el.done}</div>
        <div className='ListItem_name'>{el.name}</div>
    </div>
  )
}
