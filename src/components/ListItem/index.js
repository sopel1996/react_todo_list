import React, { useState } from 'react'
import cn from "classnames";
import "./index.css";

export const ListItem = ({el, todoList, setTodoList}) => {
  let [checkbox, setCheckbox] = useState(el.done)
  function changeCheckbox() {
    setCheckbox(!checkbox);

    let index = todoList.findIndex(elem =>elem.id === el.id);
    let tmp = todoList;
    tmp[index].done = !tmp[index].done;
    setTodoList(tmp);
    localStorage.setItem("todoList", JSON.stringify(tmp))
  }
  return (
    <div className={cn('ListItem', {'done': el.done})} onClick={changeCheckbox}>
        <div className='ListItem_id'>{el.id}</div>
        <input type="checkbox" checked={checkbox} ></input>
        <div className='ListItem_done'>{el.done}</div>
        <div className='ListItem_name'>{el.name}</div>
    </div>
  )
}
