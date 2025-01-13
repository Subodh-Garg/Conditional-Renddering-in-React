import { useState } from 'react'

function TodoTab() {
  const [todos, setTodos] = useState(['Learn React', 'Build Projects'])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    setTodos([...todos, newTodo.trim()])
    setNewTodo('')
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="todo-tab">
      <form onSubmit={addTodo} className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      
      {todos.length && (
        <div className="todos-container">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TodoTab 