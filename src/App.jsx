import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, settodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({
      todos:
        newList
    }))

  }

  function handleAddTodos(newtodo) {
    const newToDoList = [...todos, newtodo]
    settodos(newToDoList)
    persistData(newToDoList)
  }

  function handleDeleteTodo(index) {
    const newToDoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index

    })
    settodos(newToDoList)
    persistData(newToDoList)
  }



  function handleEditToDo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)

  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    settodos(localTodos)
  }, [])

  return (

    <>
      <TodoInput todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        handleEditToDo={handleEditToDo} />

    </>
  )
};

export default App;


