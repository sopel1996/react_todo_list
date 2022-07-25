
export const ToDoAddForm = ({todoList,setTodoList}) => {


  return (
    <>
        <h1> TODO List</h1>
        <form>
            <input id="newTask" name="newTask" placeholder="Введите задачу"/>
            <button type="submit">Добавить</button>
        </form>
    </>
  )
}
