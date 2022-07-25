import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { ListItem } from '../listItem'

export const ToDoList = ({todoList,setTodoList}) => {
  const mockedData = [
    {id: 1, done: true, name: "Сделать вывод моковых данных"},
    {id: 2, done: true, name: "Базово стилизовать элемент списка"},
    {id: 3, done: false, name: "Сделать чекбокс под done"},
    {id: 4, done: false, name: "Стилизовать элемент под выполненный список"},
    {id: 5, done: false, name: "Вынести данные из переменной в localStorage"},
    {id: 6, done: false, name: "Сделать добавление в список дел через input"},
  ]
  return (
    <>
      {
        mockedData.map(el=>{
          return <ListItem id={el.id} done={el.done} name={el.name} key={uuidv4()}/>
        })
      }
    </>
  )
}
