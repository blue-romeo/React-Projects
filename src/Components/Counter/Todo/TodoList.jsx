import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    
  return (
    <div>
        <h1>To Do List</h1>
        <input onChange={(e) => setInputValue(e.target.value)}/>
        <button>Add</button>
    </div>
  )
}

export default TodoList
