import React from 'react'
import cn from "classnames";
import "./index.css";

export const ListItem = ({id, done, name}) => {
  return (
    <div className={cn('ListItem', {'done': done})}>
        <div className='ListItem_id'>{id}</div>
        <div className='ListItem_done'>{done}</div>
        <div className='ListItem_name'>{name}</div>
    </div>
  )
}
