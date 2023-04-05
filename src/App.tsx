import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoContext from './context/TodoContext'
import TodoList from './components/TodoList'

function App() {
const todoData = {
  text: 'hacer tarea',
  done: false
}

  return (
    <div className="App">
      <TodoContext.Provider value={todoData}>
        <TodoList/>
      </TodoContext.Provider>
    </div>
  )
}

export default App
