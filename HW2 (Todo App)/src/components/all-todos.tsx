import TodoItem from "./todo-item"

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface AllTodosProps {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function AllTodos({ todos, onToggle, onDelete }: AllTodosProps) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  )
}

