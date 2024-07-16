import React from 'react'

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditToDo } = props
  return (
    <li className='todoItem' >
      {children}
      <div className='actionsContainer'>
        <button onClick={() => { handleEditToDo(index) }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
