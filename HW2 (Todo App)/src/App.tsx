import { useState } from 'react'
import TodoForm from './components/todo-form'
import TodoData from './components/todo-data'
import AllTodos from './components/all-todos'


interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <header className="mb-6">
            <h1 className="text-xl font-semibold text-gray-800">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'short',
              })}
            </h1>
          </header>
          <TodoForm onSubmit={addTodo} />
          <TodoData 
            created={todos.length} 
            completed={todos.filter(todo => todo.completed).length} 
          />
          <AllTodos
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  )
}

