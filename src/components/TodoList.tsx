import React, { useContext } from 'react'
import todoContext from '../context/TodoContext'

const TodoList = () => {
    const context = useContext(todoContext)
  return (
    <div>
        <p>{context.text}</p>
        <p>{context.done}</p>
    </div>
  )
}

export default TodoList